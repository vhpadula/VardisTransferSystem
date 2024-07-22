import { createClient } from "redis";
const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (error) => {
    console.error("Redis Error:", error);
});

redisClient.on("connect", () => {
    console.log("Connected to Redis");
});

interface PlayerInfo {
    id: string;
    class: string;
    balance: number;
}

const initialBalances: { [key: string]: number } = {
    working_class: 30,
    capitalist: 120,
    middle_class: 40,
    state: 120,
    bank: 1204,
};
// Step 1: Modified initializeBalancesTable to initialize room with classes
const initializeBalancesTable = async (roomID: string): Promise<boolean> => {
    try {
        const balancesTableReference = `balances:${roomID}`;
        for (const [playerClass, balance] of Object.entries(initialBalances)) {
            // Initialize each class with its initial balance
            await redisClient.hSet(
                balancesTableReference,
                playerClass,
                balance
            );
        }
        console.log(
            `Balances table initialized for room ${roomID} with class balances.`
        );
        return true;
    } catch (error) {
        console.error("Error initializing balances table:", error);
        return false;
    }
};

const getBalance = async (
    roomID: string,
    playerClass: string
): Promise<number | null> => {
    try {
        // Adjusted to include roomID in the key for fetching the correct balance
        const balance = await redisClient.hGet(
            `balances:${roomID}`,
            playerClass
        );
        if (balance === null) {
            console.log(
                `No balance found for class ${playerClass} in room ${roomID}`
            );
            return null;
        } else {
            console.log(
                `Balance for class ${playerClass} in room ${roomID} is ${balance}`
            );
            return parseInt(balance || "0", 10);
        }
    } catch (error) {
        console.error("Error getting balance:", error);
        return null;
    }
};

const transferMoney = async (
    roomID: string,
    fromPlayerClass: string,
    toPlayerClass: string,
    amount: number
): Promise<boolean> => {
    try {
        // Adjust key to include roomID for both players
        const fromBalanceKey = `balances:${roomID}`;
        const toBalanceKey = `balances:${roomID}`;

        // Decrease the balance of the fromPlayerClass
        const fromBalanceAfter = await redisClient.hIncrBy(
            fromBalanceKey,
            fromPlayerClass,
            -amount
        );
        if (fromBalanceAfter < 0) {
            // If the balance goes negative, revert the change and throw an error
            await redisClient.hIncrBy(fromBalanceKey, fromPlayerClass, amount);
            console.error(
                `Insufficient funds for ${fromPlayerClass} in room ${roomID}`
            );
            return false;
        }

        // Increase the balance of the toPlayerClass
        await redisClient.hIncrBy(toBalanceKey, toPlayerClass, amount);
        console.log(
            `Transferred ${amount} from ${fromPlayerClass} to ${toPlayerClass} in room ${roomID}`
        );

        return true;
    } catch (error) {
        console.error("Error transferring money:", error);
        return false;
    }
};

const getRoomTable = async (
    roomID: string
): Promise<{ exists: boolean; table?: any }> => {
    try {
        const roomKey = `balances:${roomID}`;
        const exists = await redisClient.exists(roomKey);
        if (exists) {
            console.log(`Room ${roomID} exists.`);
            // Fetch the room's balance table
            const table = await redisClient.hGetAll(roomKey);
            return { exists: true, table: table };
        } else {
            console.log(`Room ${roomID} does not exist.`);
            return { exists: false };
        }
    } catch (error) {
        console.error("Error fetching room table:", error);
        return { exists: false };
    }
};

export {
    redisClient,
    getBalance,
    transferMoney,
    initializeBalancesTable,
    getRoomTable,
};
