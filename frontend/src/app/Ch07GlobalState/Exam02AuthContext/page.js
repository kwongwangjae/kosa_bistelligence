"use client"
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

function AuthStatus() {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div>
            {user ? (
                <div className="alert alert-info">
                    Welcome, <strong>{user.name}</strong>!
                    <button className="btn btn-outline-danger btn-sm ms-3" onClick={logout}>Logout</button>
                </div>
            ) : (
                <div className="alert alert-warning">
                    Please login.
                    <button className="btn btn-outline-primary btn-sm ms-3" onClick={() => login({ name: "User1", id: "user1" })}>Login</button>
                </div>
            )}
        </div>
    );
}

function Exam02AuthContext() {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <div className="card">
                <div className="card-header">Exam02AuthContext</div>
                <div className="card-body">
                    <AuthStatus />
                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default Exam02AuthContext;
