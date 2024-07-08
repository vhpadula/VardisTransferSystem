import Image from "next/image";
export default function VTSTitle() {
    return (
        <>
            <div className="flex items-center justify-center">
                <span>
                    <b className="text-center text-5xl text-white font-hegemony">
                        V
                    </b>
                    <b className="text-center text-6xl text-white font-hegemony">
                        TS
                    </b>
                </span>
                <div className="relative w-30 mt-10 mb-10 px-12 pt-12 pb-12">
                    <Image src="/images/money.svg" alt="Money" fill={true} />
                </div>
            </div>
        </>
    );
}
