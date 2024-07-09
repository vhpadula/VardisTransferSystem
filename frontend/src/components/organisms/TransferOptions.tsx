import React from "react";
import Image from "next/image";
type TransferOptionsProps = {
    player: string;
};

const TransferOptions: React.FC<TransferOptionsProps> = ({ player }) => {
    const opponents: { [key: string]: string[] } = {
        working_class: ["capitalist", "middle-class", "state"],
        capitalist: ["working-class", "middle-class", "state"],
        middle_class: ["working-class", "capitalist", "state"],
        state: ["working-class", "capitalist", "middle-class"],
    };
    const selectedOpponents = opponents[player];

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative w-20 mt-10 mb-3 p-10">
                <Image src="/images/loan.svg" alt="Bank" fill={true} />
            </div>
            <p className="text-xl">Bank</p>

            <div className="grid grid-cols-3 gap-10 mt-7 mb-5">
                {selectedOpponents.map((opponent, index) => (
                    <div className="relative w-20 mt-10 mb-3 p-10" key={index}>
                        <Image
                            src={`/images/${opponent}.svg`}
                            alt={opponent}
                            fill={true}
                        />
                    </div>
                ))}
            </div>

            <p className="text-xl">Players</p>
        </div>
    );
};

export default TransferOptions;
