"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

function BoardWrite() {
    const [board, setBoard] = useState({ btitle: "", bcontent: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Saving board:", board);
        alert("Board saved!");
        router.push("/Ch08RestAPI/Exam03Board/BoardList");
    };

    return (
        <div className="card">
            <div className="card-header">Board Write</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="btitle" className="form-control" value={board.btitle} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea name="bcontent" className="form-control" rows="5" value={board.bcontent} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm me-2">Save</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => router.back()}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default BoardWrite;
