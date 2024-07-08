"use client";
import React from "react";
interface PrimaryBtnProps {
    text: string;
    onClick: () => void;
    className?: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
    text,
    onClick,
    className,
}) => {
    return (
        <button
            className={`w-full max-w-3xl relative h-20 text-center text-3xl text-white font-arial ${className}`}
            onClick={onClick}
        >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-goldenrod" />
            <b className="absolute h-[78.31%] w-[70.55%] top-[10.84%] left-[16.44%] flex items-center justify-center">
                {text}
            </b>
        </button>
    );
};

export default PrimaryBtn;
