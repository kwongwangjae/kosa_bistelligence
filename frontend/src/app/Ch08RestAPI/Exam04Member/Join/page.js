"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

function Join() {
    const [member, setMember] = useState({ mid: "", mname: "", mpassword: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const handleJoin = (e) => {
        e.preventDefault();
        console.log("Joining member:", member);
        alert("Welcome! You have successfully joined.");
        router.push("/Ch08RestAPI/Exam04Member/Login");
    };

    return (
        <div className="card">
            <div className="card-header">Member Join</div>
            <div className="card-body">
                <form onSubmit={handleJoin}>
                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input type="text" name="mid" className="form-control" value={member.mid} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="mname" className="form-control" value={member.mname} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="mpassword" className="form-control" value={member.mpassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Join</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
