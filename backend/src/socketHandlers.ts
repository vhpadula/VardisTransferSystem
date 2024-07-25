import { Server, Socket } from "socket.io";
import { getBalance, transferMoney, getRoomTable } from "./redisClient";

const registerSocketHandlers = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log("New client connected");
        // Handle client disconnection
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });

        // Assuming the client sends a 'joinRoom' event with the roomID upon connection
        socket.on("joinRoom", async (roomID: string) => {
            // Verify if the room exists in the Redis database
            const roomExists = await getRoomTable(roomID);

            if (roomExists.exists) {
                socket.join(roomID);
                console.log(`Client joined room ${roomID}`);
            } else {
                console.log(`Room ${roomID} does not exist`);
                socket.emit("roomError", "Room does not exist");
            }

            // Handle money transfer within a room
            socket.on(
                "transferMoney",
                async (
                    senderId: string,
                    receiverId: string,
                    amount: string
                ) => {
                    console.log(roomID, senderId, receiverId, amount);
                    try {
                        const transferSuccess = await transferMoney(
                            roomID,
                            senderId,
                            receiverId,
                            parseInt(amount)
                        );

                        if (transferSuccess) {
                            // Fetch new balances for both sender and receiver
                            const senderNewBalance = await getBalance(
                                roomID,
                                senderId
                            );
                            const receiverNewBalance = await getBalance(
                                roomID,
                                receiverId
                            );

                            // Notify the sender and receiver of their new balances
                            socket
                                .to(roomID)
                                .emit(
                                    "balanceUpdate",
                                    senderId,
                                    senderNewBalance
                                ); // Sender's new balance
                            socket
                                .to(roomID)
                                .emit(
                                    "balanceUpdate",
                                    receiverId,
                                    receiverNewBalance
                                ); // Receiver's new balance within the room
                        }
                    } catch (error) {
                        console.error("Error during money transfer:", error);
                        // Optionally, notify the sender about the failure
                        socket.emit(
                            "transferError",
                            "Failed to transfer money."
                        );
                    }
                }
            );
        });
    });
};

export { registerSocketHandlers };
