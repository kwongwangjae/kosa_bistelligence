"use client"
import { useState, useCallback, useEffect } from "react";

function Exam02UseCallback() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleButtonClick = useCallback(() => {
        console.log("Button clicked, count is:", count);
    }, [count]);

    useEffect(() => {
        console.log("handleButtonClick function reference changed");
    }, [handleButtonClick]);

    return (
        <div className="card">
            <div className="card-header">Exam02UseCallback</div>
            <div className="card-body">
                <p>Count: {count}</p>
                <button className="btn btn-warning btn-sm me-2" onClick={() => setCount(count + 1)}>Increment Count</button>
                <button className="btn btn-info btn-sm" onClick={handleButtonClick}>Log Count</button>
                <hr/>
                <input className="form-control mt-2" placeholder="Typing here won't change function reference..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    );
}

export default Exam02UseCallback;
