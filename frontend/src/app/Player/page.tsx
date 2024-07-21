import { CodeJoin } from "@/components";

export default function PlayerJoinRoom() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl my-20">Insert Room Code</p>
                <CodeJoin />
            </div>
        </>
    );
}
