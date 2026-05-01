"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { join } from "@/apis/memberApi";

function Join() {
    const [member, setMember] = useState({ mid: "", mname: "", mpassword: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const handleJoin = async (e) => {
        e.preventDefault();
        try {
            await join(member);
            alert("가입을 축하합니다! 로그인 해주세요.");
            router.push("/Ch08RestAPI/Exam04Member/Login");
        } catch (error) {
            console.error("Join failed:", error);
            alert("회원 가입 실패: 다시 시도해주세요.");
        }
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
