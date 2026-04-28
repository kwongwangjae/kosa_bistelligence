"use client"

import RepeatWithIndex from "./RepeatWithIndex"
import RepeatTableRowWithBno from "./RepeatTableRowWithBno"

function Exam08Repeat(){

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam08Repeat 
            </div>
            <div className="card-body">
                {/* 반복컴포넌트 */}
                <RepeatWithIndex/>
                <hr/>
                <RepeatTableRowWithBno/>
            </div>
        </div>
    );
}

export default Exam08Repeat;