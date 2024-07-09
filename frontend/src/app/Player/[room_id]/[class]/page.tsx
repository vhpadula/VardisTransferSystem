import { Currency, TransferOptions, VTSTitleSm } from "@/components";
import Wallet from "@/components/molecules/Wallet";
import Image from "next/image";
export default function Room({
    params,
}: {
    params: { room_id: string; class: string };
}) {
    return (
        <>
            <VTSTitleSm />
            <Wallet player={params.class} />
            <TransferOptions player={params.class} />
        </>
    );
}
