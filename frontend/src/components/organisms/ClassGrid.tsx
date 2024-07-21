"use client";

import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for image handling
import Link from "next/link";
const ClassGrid: React.FC = () => {
    return (
        <div className="w-full h-full grid grid-cols-2 gap-20">
            <Link
                href="/Player/2/working_class"
                className="relative w-30 my-10 px-12 py-12"
            >
                <Image
                    src={"/images/working-class.svg"}
                    alt={"working-class"}
                    fill={true}
                />
            </Link>
            <Link
                href="/Player/2/capitalist"
                className="relative w-30 my-10 px-12 py-12"
                onClick={() => console.log("clicked")}
            >
                <Image
                    src={"/images/capitalist.svg"}
                    alt={"capitalist"}
                    fill={true}
                />
            </Link>
            <Link
                href="/Player/2/middle_class"
                className="relative w-30 my-10 px-12 py-12"
            >
                <Image
                    src={"/images/middle-class.svg"}
                    alt={"middle-class"}
                    fill={true}
                />
            </Link>
            <Link
                href="/Player/2/state"
                className="relative w-30 my-10 px-12 py-12"
            >
                <Image src={"/images/state.svg"} alt={"state"} fill={true} />
            </Link>
        </div>
    );
};

export default ClassGrid;
