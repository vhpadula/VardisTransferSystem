"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { PrimaryBtn, TextBox } from "../atoms";

interface PlayerModalProps {
    onClose: () => void;
    class?: string; // Optional prop
}

const PlayerModal: React.FC<PlayerModalProps> = ({
    onClose,
    class: className,
}) => {
    const inputRef = useRef<HTMLInputElement>(null); // Step 1: Create a ref for the input field

    useEffect(() => {
        inputRef.current?.focus(); // Step 2: Focus on the input field when the modal is opened
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
            <div className="bg-black w-[75%] h-[50%] rounded-lg ">
                <p className="my-2 mr-2 justify-end flex">
                    <button className=" text-white text-2xl" onClick={onClose}>
                        X
                    </button>
                </p>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center">
                        <p className="text-2xl">Paying:</p>
                        <div className="relative w-20 mb-5 p-10">
                            <Image
                                src={`/images/${className}.svg`}
                                alt={`/images/${className}.svg`}
                                fill={true}
                            />
                        </div>
                    </div>
                    <div className="flex items-center w-[50%]">
                        <TextBox ref={inputRef} inputType="number" />
                        <p className="font-hegemony text-3xl">V</p>
                    </div>
                    <PrimaryBtn
                        className="w-[75%] mt-5"
                        text="Transfer"
                        onClick={onClose}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayerModal;
