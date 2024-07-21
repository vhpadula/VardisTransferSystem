"use client";
import React from "react";
import { ButtonGroup } from "../molecules";
import Link from "next/link";
import { PrimaryBtn } from "../atoms";
interface ModeSelectionProps {
    className?: string;
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className={className}>
                <div>
                    <Link href="/Room/1" passHref>
                        <PrimaryBtn
                            onClick={() => console.log("Clicked Create Room")}
                            text="Create Room"
                            className="mt-4"
                        />
                    </Link>
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
