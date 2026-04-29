"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

function BoardList() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        // Mock data
        setBoards([
            { bno: 1, btitle: "First board title", bwriter: "user1", bdate: "2024-04-29" },
            { bno: 2, btitle: "Second board title", bwriter: "user2", bdate: "2024-04-29" },
            { bno: 3, btitle: "Third board title", bwriter: "user3", bdate: "2024-04-29" },
        ]);
    }, []);

    return (
        <div className="card">
            <div className="card-header">Board List</div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.map(board => (
                            <tr key={board.bno}>
                                <td>{board.bno}</td>
                                <td><Link href={`/Ch08RestAPI/Exam03Board/BoardRead?bno=${board.bno}`}>{board.btitle}</Link></td>
                                <td>{board.bwriter}</td>
                                <td>{board.bdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link href="/Ch08RestAPI/Exam03Board/BoardWrite" className="btn btn-success btn-sm">Write</Link>
            </div>
        </div>
    );
}

export default BoardList;
