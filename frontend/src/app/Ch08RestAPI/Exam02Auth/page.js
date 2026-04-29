"use client"
import { useState } from "react";

function Exam02Auth() {
    const [credentials, setCredentials] = useState({ id: "", password: "" });
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login
        if (credentials.id && credentials.password) {
            const mockUser = { id: credentials.id, name: "Hong Gil-dong", token: "mock-jwt-token" };
            setUser(mockUser);
            localStorage.setItem("authToken", mockUser.token);
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("authToken");
    };

    return (
        <div className="card">
            <div className="card-header">Exam02Auth</div>
            <div className="card-body">
                {!user ? (
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input type="text" name="id" className="form-control form-control-sm" value={credentials.id} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control form-control-sm" value={credentials.password} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">Login</button>
                    </form>
                ) : (
                    <div className="alert alert-info">
                        Logged in as: <strong>{user.name} ({user.id})</strong>
                        <hr/>
                        <p>Token: <small>{user.token}</small></p>
                        <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Exam02Auth;
