"use client";
import Image from "next/image"; // Import Image from 'next/image'
import { Currency, PrimaryBtn } from "../atoms";
interface WalletProps {
    player: string;
    roomID: string;
}

const playerImages: { [key: string]: string } = {
    working_class: "/images/working_class.svg",
    capitalist: "/images/capitalist.svg",
    middle_class: "/images/middle_class.svg",
    state: "/images/state.svg",
};

const Wallet: React.FC<WalletProps> = ({ player, roomID }) => {
    const imageSrc = playerImages[player];

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-30 my-12 p-12">
                <Image src={imageSrc} alt="Player" fill={true} />
            </div>
            <span className="flex flex-col justify-center items-center">
                <p className="text-3xl">Wallet</p>
                <Currency playerClass={player} roomID={roomID} />

                {player === "capitalist" && (
                    <>
                        <p className="text-3xl mt-5">Capital</p>
                        <Currency
                            playerClass={"capitalist_capital"}
                            roomID={roomID}
                        />
                    </>
                )}
            </span>
        </div>
    );
};

export default Wallet;
