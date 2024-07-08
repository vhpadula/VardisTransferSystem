import Currency from "@/components/atoms/Currency";
import Image from "next/image";

interface PlayerCurrencyProps {
    src: string;
    name: string;
}

const PlayerCurrency: React.FC<PlayerCurrencyProps> = ({ src, name }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative w-20 mt-10 mb-10 px-12 pt-12 pb-12">
                <Image src={src} alt={name} fill={true} />
            </div>
            <Currency />
        </div>
    );
};

export default PlayerCurrency;
