"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonGroup } from "../molecules";
import Link from "next/link";
import { PrimaryBtn } from "../atoms";
import { createRoom } from "@/api";

interface ModeSelectionProps {
    className?: string;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ className }) => {
    const [roomId, setRoomId] = useState<string>("");
    const router = useRouter();

    const handleCreateRoom = async () => {
        const newRoomId = await createRoom();
        setRoomId(newRoomId);
        router.push(`/Room/${newRoomId}`);
    };

    return (
        <div className={className}>
            <div className={className}>
                <div>
                    <PrimaryBtn
                        onClick={handleCreateRoom}
                        text="Create Room"
                        className="mt-4"
                    />
                </div>
                <div>
                    <Link href="/Player" passHref>
                        <PrimaryBtn
                            onClick={() => console.log("Clicked Join Room")}
                            text="Join Room"
                            className="mt-4"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModeSelection;
