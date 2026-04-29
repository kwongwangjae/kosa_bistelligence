"use client"
import { useEffect, useState } from "react";

function Exam02UseEffect() {
    const [count, setCount] = useState(0);

    // Mount & Update
    useEffect(() => {
        console.log("Effect: Mounted or Updated (No dependency array or contains [count])");
        
        // Unmount (Cleanup)
        return () => {
            console.log("Cleanup: Before update or unmounting");
        };
    }, [count]);

    // Mount only
    useEffect(() => {
        console.log("Effect: Mounted only (Empty dependency array [])");
    }, []);

    return (
        <div className="card">
            <div className="card-header">Exam02UseEffect</div>
            <div className="card-body">
                <p>Count: {count}</p>
                <button className="btn btn-success btn-sm" onClick={() => setCount(count + 1)}>Update Count</button>
                <hr/>
                <p>Check the console to see the Effect and Cleanup sequence.</p>
            </div>
        </div>
    );
}

export default Exam02UseEffect;
