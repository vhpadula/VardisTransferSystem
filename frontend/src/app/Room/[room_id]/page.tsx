"use client";
import { PlayersGrid, VTSTitle } from "@/components";

import { useEffect } from "react";
import { socket } from "@/api";

export default function Room({ params }: { params: { room_id: string } }) {
    useEffect(() => {
        socket.emit("joinRoom", params.room_id);
    }, [params.room_id]);

    return (
        <>
            <div className="flex items-center justify-center">
                <VTSTitle />
                <a className="mx-5 text-xl">Room ID: {params.room_id}</a>
            </div>
            <PlayersGrid roomID={params.room_id} />
        </>
    );
}
