"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
    const [credentials, setCredentials] = useState({ mid: "", mpassword: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in:", credentials);
        alert("Login successful!");
        router.push("/");
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
