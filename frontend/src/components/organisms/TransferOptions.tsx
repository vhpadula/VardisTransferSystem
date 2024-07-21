"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlayerModal, BankModal } from "@/components"; // Adjust the import path as necessary

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

    const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
    const [selectedOpponent, setSelectedOpponent] = useState("");
    const openPlayerModal = (opponent: React.SetStateAction<string>) => {
        setSelectedOpponent(opponent);
        setIsPlayerModalOpen(true);
    };
    const closePlayerModal = () => setIsPlayerModalOpen(false);

    const [isBankModalOpen, setIsBankModalOpen] = useState(false); // Step 2: State for BankModal visibility
    const openBankModal = () => setIsBankModalOpen(true); // Handler to open BankModal
    const closeBankModal = () => setIsBankModalOpen(false); // Handler to close BankModal
    return (
        <div className="flex flex-col justify-center items-center">
            <button
                onClick={openBankModal}
                className="relative w-20 mt-10 mb-3 p-10"
            >
                <Image src="/images/loan.svg" alt="Bank" fill={true} />
            </button>
            <p className="text-xl">Bank</p>

            <div className="grid grid-cols-3 gap-10 mt-7 mb-5">
                {selectedOpponents.map((opponent, index) => (
                    <button
                        className="relative w-20 mt-10 mb-3 p-10"
                        key={index}
                        onClick={() => openPlayerModal(opponent)}
                    >
                        <Image
                            src={`/images/${opponent}.svg`}
                            alt={opponent}
                            fill={true}
                        />
                    </button>
                ))}
            </div>

            <p className="text-xl">Players</p>
            {isPlayerModalOpen && (
                <PlayerModal
                    onClose={closePlayerModal}
                    class={selectedOpponent}
                />
            )}
            {isBankModalOpen && <BankModal onClose={closeBankModal} />}
        </div>
    );
};

export default TransferOptions;
