import Currency from "@/components/atoms/Currency";
import Image from "next/image";

interface PlayerCurrencyProps {
    src: string;
    name: string;
    roomID: string;
}

const PlayerCurrency: React.FC<PlayerCurrencyProps> = ({
    src,
    name,
    roomID,
}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative w-20 mt-10 mb-10 px-12 pt-12 pb-12">
                <Image src={src} alt={name} fill={true} />
            </div>
            <div className="flex">
                <Currency playerClass={name} roomID={roomID} />
                {name === "capitalist" && (
                    <>
                        <p className="text-3xl"> / </p>
                        <Currency
                            playerClass={"capitalist_capital"}
                            roomID={roomID}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default PlayerCurrency;
