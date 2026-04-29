"use client";

import { useEffect, useState } from "react";

// 상태를 변경하면 다시 실행됨.(리렌더링)
// 상태값은 유지된다.
function Exam06UseEffect() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("red");

    // let number2 = 0;
    // let color2 = "blue";

    const addNumber = function(){
        setNumber(number + 1);
        setNumber(n => n + 1);
        // number2 = number2 + 2;
    };

    // const changeColor = () => {
    //     setColor("blue");
    //     // color2 = "yellow";
    // }

    const changeColor = function(){
        setColor("#" + Math.floor(Math.random() * 16777216).toString(16));
    }

    useEffect(() => {
        console.log("상태 변경 완료", number, color);
    });
        
    

    console.log("render...");

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam06UseEffect
            </div>
            <div className="card-body">
                <button onClick={addNumber} className="btn btn-info me-2" >숫자 증가</button>
                <button onClick={changeColor} className="btn btn-info" >색깔 변경</button>
                <hr/>
                <p style={{color: color}}>{number}</p>
                <p style={{color: color}}>{color}</p>
            </div>
        </div>
    );
}

export default Exam06UseEffect;    