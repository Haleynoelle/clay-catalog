"use client";
import { useRouter } from "next/navigation";

export default function EditProjects() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Submitting Your Work");
        router.back();
    };
    return (
    <div>
        <h1>Project Editor</h1>
        <button onClick={handleClick}>Submit Project</button>
    </div>
    )
}


