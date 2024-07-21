"use client";
import React from "react";
import Link from "next/link";
import { PrimaryBtn, TextBox } from "@/components";

const CodeJoin: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[70%]">
            <TextBox placeholder="code" />
            <Link href="/Player/2" className="mt-10 w-full" passHref>
                <PrimaryBtn
                    text="Join Room"
                    onClick={() => console.log("Clicked")}
                />
            </Link>
        </div>
    );
};

export default CodeJoin;
