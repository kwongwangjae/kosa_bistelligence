"use client"
import { useState } from "react";

function ChildComponent({ count, onClick }) {
    return (
        <div className="alert alert-info mt-2">
            <p>Child Count (from Props): {count}</p>
            <button className="btn btn-warning btn-sm" onClick={onClick}>Change Parent State</button>
        </div>
    );
}

function Exam08StateToProp() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="card">
            <div className="card-header">Exam08StateToProp</div>
            <div className="card-body">
                <p>Parent Count: {count}</p>
                <button className="btn btn-primary btn-sm" onClick={handleButtonClick}>Update State</button>
                <hr/>
                <ChildComponent count={count} onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default Exam08StateToProp;
