import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors"; // Import the cors package

import { registerSocketHandlers } from "./socketHandlers";
import {
    redisClient,
    initializeBalancesTable,
    getBalance,
} from "./redisClient";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Replace with your client URL
        methods: ["GET", "POST"],
    },
});
// Use the cors middleware
app.use(
    cors({
        origin: "http://localhost:3000", // Replace with your client URL
    })
);
redisClient.connect();
registerSocketHandlers(io);

app.use(express.json());
app.post("/create-room", (req, res) => {
    // Generate a six character alphanumeric id for the room
    const roomId = generateRoomId();

    // Call initializeBalancesTable with the roomId
    initializeBalancesTable(roomId);

    // Send the roomId as the response
    res.send(roomId);
});

app.get("/get-balance", async (req, res) => {
    const { roomID, playerClass } = req.query;

    try {
        // Implement your logic to retrieve the balance for the given roomId and playerClass
        const balance = await getBalance(
            roomID as string,
            playerClass as string
        );
        console.log(balance);
        if (balance === undefined || balance === null) {
            // If balance is not found, send a 404 Not Found status
            res.sendStatus(404);
        } else {
            // Send the balance as the response, converting it to a string
            res.send(balance.toString());
        }
    } catch (error) {
        console.error("Error retrieving balance:", error);
        // Send an appropriate error status code and message
        res.sendStatus(500); // Internal Server Error
    }
});

function generateRoomId() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let roomId = "";
    for (let i = 0; i < 6; i++) {
        roomId += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return roomId;
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
