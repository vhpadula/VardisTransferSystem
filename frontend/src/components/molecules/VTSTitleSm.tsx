import Image from "next/image";
export default function VTSTitleSm() {
    return (
        <>
            <div className="flex items-center justify-center">
                <span>
                    <b className="text-center text-xl text-white font-hegemony">
                        V
                    </b>
                    <b className="text-center text-2xl text-white font-hegemony">
                        TS
                    </b>
                </span>
                <div className="relative w-10 my-5 p-5">
                    <Image src="/images/money.svg" alt="Money" fill={true} />
                </div>
            </div>
        </>
    );
}
