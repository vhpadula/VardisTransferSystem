import { ClassGrid } from "@/components";

export default function SelectClass() {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full">
                <p className="text-3xl mt-20 mb-10">Select Class</p>
                <ClassGrid />
            </div>
        </>
    );
}
