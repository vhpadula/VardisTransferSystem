"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { PrimaryBtn, TextBox } from "../atoms";

interface BankModalProps {
    onClose: () => void;
    class?: string;
}

const BankModal: React.FC<BankModalProps> = ({ onClose, class: className }) => {
    // Step 1: Define a state for the current page
    const [currentPage, setCurrentPage] = useState("main");

    // Step 2: Create handler functions for navigation
    const navigateToImport = () => setCurrentPage("import");
    const navigateToExport = () => setCurrentPage("export");
    const navigateToPay = () => setCurrentPage("pay");
    const navigateToMain = () => setCurrentPage("main"); // Optional, to navigate back to the main page
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
            <div className="bg-black w-[75%] h-[50%] rounded-lg ">
                <p className="mt-2 mb-1 mr-2 justify-end flex">
                    <button className=" text-white text-2xl" onClick={onClose}>
                        X
                    </button>
                </p>

                {currentPage === "main" && (
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl mb-3">Bank Services</p>
                        <div className="flex items-center justify-center mt-1">
                            <PrimaryBtn
                                className="w-[25%] h-12 px-20"
                                text="Loan"
                                onClick={onClose}
                            />
                            <div className="relative ml-7 w-7 p-7">
                                <Image
                                    src={`/images/loan.svg`}
                                    alt={"Loan"}
                                    fill={true}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-1">
                            <PrimaryBtn
                                className="w-[25%] h-12 px-20"
                                text="Export"
                                onClick={navigateToExport}
                            />
                            <div className="relative ml-7 w-7 p-7">
                                <Image
                                    src={`/images/export.svg`}
                                    alt={"Export"}
                                    fill={true}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-1">
                            <PrimaryBtn
                                className="w-[25%] h-12 px-20"
                                text="Import"
                                onClick={navigateToImport}
                            />
                            <div className="relative ml-7 w-7 p-7">
                                <Image
                                    src={`/images/import.svg`}
                                    alt={"Import"}
                                    fill={true}
                                />
                            </div>
                        </div>

                        <PrimaryBtn
                            className="w-[25%] h-12 px-20"
                            text="Pay"
                            onClick={navigateToPay}
                        />
                    </div>
                )}

                {currentPage === "import" && (
                    <div>
                        {/* Import page content */}
                        <PrimaryBtn
                            text="Back to Main"
                            onClick={navigateToMain} // Optional, to navigate back to the main page
                        />
                    </div>
                )}

                {currentPage === "export" && (
                    <div>
                        {/* Export page content */}
                        <PrimaryBtn
                            text="Back to Main"
                            onClick={navigateToMain} // Optional, to navigate back to the main page
                        />
                    </div>
                )}

                {currentPage === "pay" && (
                    <div>
                        {/* Import page content */}
                        <PrimaryBtn
                            text="Back to Main"
                            onClick={navigateToMain} // Optional, to navigate back to the main page
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BankModal;
