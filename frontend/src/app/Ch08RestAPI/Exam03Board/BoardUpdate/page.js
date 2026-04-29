"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function BoardUpdate() {
    const searchParams = useSearchParams();
    const bno = searchParams.get("bno");
    const router = useRouter();
    const [board, setBoard] = useState({ btitle: "", bcontent: "" });

    useEffect(() => {
        // Mock fetch original data
        setBoard({
            btitle: "Original Title for " + bno,
            bcontent: "Original content for " + bno
        });
    }, [bno]);

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Updating board:", bno, board);
        alert("Board updated!");
        router.push(`/Ch08RestAPI/Exam03Board/BoardRead?bno=${bno}`);
    };

    return (
        <div className="card">
            <div className="card-header">Board Update</div>
            <div className="card-body">
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="btitle" className="form-control" value={board.btitle} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea name="bcontent" className="form-control" rows="5" value={board.bcontent} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm me-2">Update</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => router.back()}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default BoardUpdate;
