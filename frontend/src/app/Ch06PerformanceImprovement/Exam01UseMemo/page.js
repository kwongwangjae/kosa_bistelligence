"use client"
import { useState, useMemo } from "react";

function Exam01UseMemo() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const expensiveValue = useMemo(() => {
        console.log("Computing expensive value...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return count * 10;
    }, [count]);

    return (
        <div className="card">
            <div className="card-header">Exam01UseMemo</div>
            <div className="card-body">
                <p>Count: {count}</p>
                <p>Expensive Value: {expensiveValue}</p>
                <button className="btn btn-primary btn-sm me-2" onClick={() => setCount(count + 1)}>Increment Count</button>
                <hr/>
                <input className="form-control mt-2" placeholder="Type something..." value={input} onChange={(e) => setInput(e.target.value)} />
                <p className="mt-2">Input: {input}</p>
                <p><small>(Notice: Typing in the input doesn't trigger "Computing expensive value...")</small></p>
            </div>
        </div>
    );
}

export default Exam01UseMemo;
