"use client"
import { useState } from "react";

function Exam01AsyncControl() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            // Mocking API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Simulate success or error
            if (Math.random() > 0.3) {
                setData({ message: "Successfully fetched data from API!" });
            } else {
                throw new Error("Failed to fetch data. Please try again.");
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <div className="card-header">Exam01AsyncControl</div>
            <div className="card-body">
                <button className="btn btn-primary btn-sm" onClick={fetchData} disabled={loading}>
                    {loading ? "Loading..." : "Fetch Data"}
                </button>
                <hr/>
                {loading && <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {data && <div className="alert alert-success">{data.message}</div>}
            </div>
        </div>
    );
}

export default Exam01AsyncControl;
