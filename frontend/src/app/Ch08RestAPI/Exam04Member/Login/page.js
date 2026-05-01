"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/apis/memberApi";
import { addAuthHeader } from "@/apis/AxiosConfig";

function Login() {
    const [credentials, setCredentials] = useState({ mid: "", mpassword: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(credentials);
            const user = response.data;
            
            // 헤더 설정 및 로컬 스토리지 저장
            addAuthHeader(user.accessToken);
            localStorage.setItem("mid", user.mid);
            localStorage.setItem("mname", user.mname);
            localStorage.setItem("accessToken", user.accessToken);

            alert("로그인 성공!");
            router.push("/");
        } catch (error) {
            console.error("Login failed:", error);
            alert("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
        }
    };

    return (
        <div className="card">
            <div className="card-header">Member Login</div>
            <div className="card-body">
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input type="text" name="mid" className="form-control" value={credentials.mid} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="mpassword" className="form-control" value={credentials.mpassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
