"use client"
import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext({
    color: "black",
    setColor: () => {}
});

function ColorBox() {
    const { color } = useContext(ColorContext);
    return (
        <div style={{ width: "100px", height: "100px", backgroundColor: color, border: "1px solid gray", marginTop: "10px" }}>
        </div>
    );
}

function Exam01ColorContext() {
    const [color, setColor] = useState("red");

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            <div className="card">
                <div className="card-header">Exam01ColorContext</div>
                <div className="card-body">
                    <button className="btn btn-danger btn-sm me-2" onClick={() => setColor("red")}>Red</button>
                    <button className="btn btn-success btn-sm me-2" onClick={() => setColor("green")}>Green</button>
                    <button className="btn btn-primary btn-sm" onClick={() => setColor("blue")}>Blue</button>
                    <hr/>
                    <ColorBox />
                </div>
            </div>
        </ColorContext.Provider>
    );
}

export default Exam01ColorContext;
