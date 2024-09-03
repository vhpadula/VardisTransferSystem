"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { PrimaryBtn, TextBox } from "../atoms";

interface CapitalModalProps {
    onClose: () => void;
    class?: string;
}

const CapitalModal: React.FC<CapitalModalProps> = ({
    onClose,
    class: className,
}) => {
    // Step 1: Define a state for the current page
    const [currentPage, setCurrentPage] = useState("main");

    // Step 2: Create handler functions for navigation

    const navigateToDeposit = () => setCurrentPage("deposit");
    const navigateToWithdraw = () => setCurrentPage("withdraw");
    const navigateToMain = () => setCurrentPage("main"); // Optional, to navigate back to the main page
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
            <div className="bg-black w-[75%] h-[75%] rounded-lg ">
                <p className="mt-2 mb-1 mr-2 justify-end flex">
                    <button className=" text-white text-2xl" onClick={onClose}>
                        X
                    </button>
                </p>

                {currentPage === "main" && (
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl mb-3">Manage Capital</p>
                        <div className="flex items-center justify-center mt-1">
                            <PrimaryBtn
                                className="w-[25%] h-12 px-20"
                                text="Deposit"
                                onClick={navigateToDeposit}
                            />
                            <div className="relative ml-7 w-7 p-10">
                                <Image
                                    src={`/images/capital.svg`}
                                    alt={"Capital"}
                                    fill={true}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-3">
                            <PrimaryBtn
                                className="w-[25%] h-12 px-20"
                                text="Withdraw"
                                onClick={navigateToWithdraw}
                            />
                            <div className="relative ml-7 w-7 p-10">
                                <Image
                                    src={`/images/money.svg`}
                                    alt={"Money"}
                                    fill={true}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === "deposit" && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center">
                            <p className="text-2xl mr-2">Deposit to Capital</p>
                            <div className="relative w-20 mb-5 p-10">
                                <Image
                                    src={`/images/capital.svg`}
                                    alt={"Capital"}
                                    fill={true}
                                />
                            </div>
                        </div>
                        <div className="flex items-center w-[50%]">
                            <TextBox inputType="number" />
                            <p className="font-hegemony text-3xl">V</p>
                        </div>
                        <PrimaryBtn
                            className="w-[75%] mt-7"
                            text="Transfer"
                            onClick={onClose}
                        />
                        <button
                            className="text-xl mt-4"
                            onClick={navigateToMain}
                        >
                            Cancel
                        </button>
                    </div>
                )}

                {currentPage === "withdraw" && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center">
                            <p className="text-2xl mr-2">Withdraw to Wallet</p>
                            <div className="relative w-20 mb-5 p-10">
                                <Image
                                    src={`/images/money.svg`}
                                    alt={"Money"}
                                    fill={true}
                                />
                            </div>
                        </div>
                        <div className="flex items-center w-[50%]">
                            <TextBox inputType="number" />
                            <p className="font-hegemony text-3xl">V</p>
                        </div>
                        <PrimaryBtn
                            className="w-[75%] mt-7"
                            text="Transfer"
                            onClick={onClose}
                        />
                        <button
                            className="text-xl mt-4"
                            onClick={navigateToMain}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CapitalModal;
