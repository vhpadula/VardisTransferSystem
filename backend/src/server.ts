import express from "express";
import http from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./socketHandlers";
import { redisClient, initializeBalancesTable } from "./redisClient";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

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
