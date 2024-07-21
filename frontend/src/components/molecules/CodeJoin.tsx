"use client";
import React from "react";
import { PrimaryBtn, TextBox } from "@/components";

const CodeJoin: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[70%]">
            <TextBox placeholder="code" />
            <PrimaryBtn
                text="Join Room"
                className="mt-10"
                onClick={() => console.log("Clicked")}
            />
        </div>
    );
};

export default CodeJoin;
