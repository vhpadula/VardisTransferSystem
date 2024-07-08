import React from "react";
import PlayerCurrency from "@/components/molecules/PlayerCurrency";

const PlayersGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <PlayerCurrency
                src="/images/working-class.svg"
                name="Working Class"
            />
            <PlayerCurrency src="/images/capitalist.svg" name="Capitalist" />

            <PlayerCurrency
                src="/images/middle-class.svg"
                name="Middle Class"
            />

            <PlayerCurrency src="/images/state.svg" name="State" />
        </div>
    );
};

export default PlayersGrid;
