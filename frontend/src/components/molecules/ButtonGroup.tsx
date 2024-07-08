"use client";
import React from "react";
import { PrimaryBtn } from "../atoms";

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

interface ButtonGroupProps {
    buttons: ButtonProps[];
    className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, className }) => {
    return (
        <div
            className={` flex flex-col justify-center items-center ${className}`}
        >
            {buttons.map((button, index) => (
                <PrimaryBtn
                    key={index}
                    text={button.text}
                    onClick={button.onClick}
                    className={`${index !== 0 ? "mt-8" : ""} ${
                        button.className
                    }`}
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
