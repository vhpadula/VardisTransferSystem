"use client";
import React from "react";
import { ButtonGroup } from "../molecules";
interface ModeSelectionProps {
    className?: string;
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({ className }) => {
    return (
        <div className={className}>
            <ButtonGroup
                buttons={[
                    {
                        text: "Create Room",
                        onClick: () => console.log("Create Room clicked"),
                    },
                    {
                        text: "Join Room",
                        onClick: () => console.log("Join Room clicked"),
                        className: "mt-4",
                    },
                ]}
            />
        </div>
    );
};

export default ModeSelection;
