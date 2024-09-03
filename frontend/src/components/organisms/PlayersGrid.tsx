import React from "react";
import PlayerCurrency from "@/components/molecules/PlayerCurrency";

interface PlayersGridProps {
    roomID: string;
}

const PlayersGrid: React.FC<PlayersGridProps> = ({ roomID }) => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <PlayerCurrency
                src="/images/working_class.svg"
                name="working_class"
                roomID={roomID}
            />
            <PlayerCurrency
                src="/images/capitalist.svg"
                name="capitalist"
                roomID={roomID}
            />

            <PlayerCurrency
                src="/images/middle_class.svg"
                name="middle_class"
                roomID={roomID}
            />

            <PlayerCurrency
                src="/images/state.svg"
                name="state"
                roomID={roomID}
            />
        </div>
    );
};

export default PlayersGrid;
