import { PlayersGrid, VTSTitle } from "@/components";

export default function Room({ params }: { params: { id: string } }) {
    return (
        <>
            <div className="flex items-center justify-center">
                <VTSTitle />
                <a className="mx-5 text-xl">Room ID: {params.id}</a>
            </div>
            <PlayersGrid />
        </>
    );
}
