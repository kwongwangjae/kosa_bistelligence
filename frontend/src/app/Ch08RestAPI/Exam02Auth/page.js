"use client"
import { useState } from "react";
import { login } from "@/apis/memberApi";
import { addAuthHeader, removeAuthHeader } from "@/apis/AxiosConfig";

function Exam02Auth() {
    const [credentials, setCredentials] = useState({ mid: "", mpassword: "" });
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(credentials);
            const user = response.data; // {mid: "...", mname: "...", accessToken: "..."}
            
            // 전역적으로 axios 헤더에 토큰 설정
            addAuthHeader(user.accessToken);
            
            // 상태 및 로컬 스토리지 업데이트
            setUser(user);
            localStorage.setItem("mid", user.mid);
            localStorage.setItem("mname", user.mname);
            localStorage.setItem("accessToken", user.accessToken);
        } catch (error) {
            console.error("Login failed:", error);
            alert("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
        }
    };

    const handleLogout = () => {
        // 전역적으로 axios 헤더에서 토큰 제거
        removeAuthHeader();
        
        // 상태 및 로컬 스토리지 초기화
        setUser(null);
        localStorage.removeItem("mid");
        localStorage.removeItem("mname");
        localStorage.removeItem("accessToken");
    };

    return (
        <div className="card">
            <div className="card-header">Exam02Auth</div>
            <div className="card-body">
                {!user ? (
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input type="text" name="mid" className="form-control form-control-sm" value={credentials.mid} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="mpassword" className="form-control form-control-sm" value={credentials.mpassword} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">Login</button>
                    </form>
                ) : (
                    <div className="alert alert-info">
                        Logged in as: <strong>{user.mname} ({user.mid})</strong>
                        <hr/>
                        <p>Token: <small style={{wordBreak: "break-all"}}>{user.accessToken}</small></p>
                        <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Exam02Auth;
