import { io } from "socket.io-client";
const URL =
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:5000";

export const socket = io(URL || "http://localhost:5000");

export async function getCurrency(roomID: string, playerClass: string) {
    const res = await fetch(
        `http://localhost:5000/get-balance?roomID=${roomID}&playerClass=${playerClass}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
