import { PlayersGrid, VTSTitle } from "@/components";

export default function Room({ params }: { params: { room_id: string } }) {
    return (
        <>
            <div className="flex items-center justify-center">
                <VTSTitle />
                <a className="mx-5 text-xl">Room ID: {params.room_id}</a>
            </div>
            <PlayersGrid />
        </>
    );
}
