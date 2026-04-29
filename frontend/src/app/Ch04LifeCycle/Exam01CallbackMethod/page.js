"use client"
import { useState } from "react";

function Exam01CallbackMethod() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    console.log("Exam01CallbackMethod rendered");

    return (
        <div className="card">
            <div className="card-header">Exam01CallbackMethod</div>
            <div className="card-body">
                <p>Count: {count}</p>
                <button className="btn btn-primary btn-sm" onClick={handleButtonClick}>Update State</button>
                <hr/>
                <p>Check the console to see the rendering sequence.</p>
            </div>
        </div>
    );
}

export default Exam01CallbackMethod;
