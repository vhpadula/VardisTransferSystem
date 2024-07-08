import ModeSelection from "@/components/organisms/ModeSelection";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-[90%] h- mt-10 px-12 pt-12 pb-12">
                    <Image
                        src="/images/hegemony.svg"
                        alt="Hegemony"
                        fill={true}
                    />
                </div>

                <b className="text-center text-3xl text-white font-hegemony">
                    Vardis Transfer system
                </b>
            </div>
            <ModeSelection className="py-24 px-12" />
        </>
    );
}
