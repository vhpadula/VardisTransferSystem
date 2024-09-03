"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PrimaryBtn, TextBox } from "@/components";
import { socket } from "@/api";

const CodeJoin: React.FC = () => {
    const [roomId, setRoomId] = useState("");

    const handleJoinRoom = () => {
        console.log("joining room of " + roomId);
        socket.emit("joinRoom", roomId); // Use the state value for roomId
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomId(event.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center w-[70%]">
            <TextBox
                placeholder="code"
                defaultValue={roomId}
                onChange={handleInputChange}
            />
            <Link href={`/Player/${roomId}`} className="mt-10 w-full" passHref>
                <PrimaryBtn text="Join Room" onClick={handleJoinRoom} />
            </Link>
        </div>
    );
};

export default CodeJoin;
