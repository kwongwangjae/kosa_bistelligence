"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

function BoardRead() {
    const searchParams = useSearchParams();
    const bno = searchParams.get("bno");
    const router = useRouter();
    const [board, setBoard] = useState(null);

    useEffect(() => {
        // Mock fetch
        setBoard({
            bno: bno,
            btitle: "Title for " + bno,
            bcontent: "Content for " + bno + ". This is a detailed description.",
            bwriter: "user1",
            bdate: "2024-04-29"
        });
    }, [bno]);

    if (!board) return <div>Loading...</div>;

    return (
        <div className="card">
            <div className="card-header">Board Read</div>
            <div className="card-body">
                <p><strong>No:</strong> {board.bno}</p>
                <p><strong>Title:</strong> {board.btitle}</p>
                <p><strong>Writer:</strong> {board.bwriter}</p>
                <p><strong>Date:</strong> {board.bdate}</p>
                <hr/>
                <p>{board.bcontent}</p>
                <hr/>
                <Link href={`/Ch08RestAPI/Exam03Board/BoardUpdate?bno=${board.bno}`} className="btn btn-warning btn-sm me-2">Update</Link>
                <button className="btn btn-danger btn-sm me-2" onClick={() => { alert("Deleted!"); router.push("/Ch08RestAPI/Exam03Board/BoardList"); }}>Delete</button>
                <button className="btn btn-secondary btn-sm" onClick={() => router.push("/Ch08RestAPI/Exam03Board/BoardList")}>List</button>
            </div>
        </div>
    );
}

export default BoardRead;
