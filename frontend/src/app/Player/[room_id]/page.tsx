import { ClassGrid } from "@/components";

export default function SelectClass({
    params,
}: {
    params: { room_id: string };
}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full">
                <p className="text-3xl mt-20 mb-10">Select Class</p>
                <ClassGrid roomID={params.room_id} />
            </div>
        </>
    );
}
