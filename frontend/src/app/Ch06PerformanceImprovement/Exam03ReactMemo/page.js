"use client"
import React, { useState } from "react";

const ChildComponent = React.memo(({ name }) => {
    console.log("ChildComponent rendered:", name);
    return (
        <div className="alert alert-secondary mt-2">
            Child Component for: <strong>{name}</strong>
        </div>
    );
});

ChildComponent.displayName = "ChildComponent";

function Exam03ReactMemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("React");

    return (
        <div className="card">
            <div className="card-header">Exam03ReactMemo</div>
            <div className="card-body">
                <p>Count: {count}</p>
                <button className="btn btn-danger btn-sm me-2" onClick={() => setCount(count + 1)}>Increment Count</button>
                <button className="btn btn-dark btn-sm" onClick={() => setName(name === "React" ? "Next.js" : "React")}>Change Name</button>
                <hr/>
                <ChildComponent name={name} />
                <p className="mt-2"><small>(Notice: Incrementing count does not re-render ChildComponent because its props didn't change.)</small></p>
            </div>
        </div>
    );
}

export default Exam03ReactMemo;
