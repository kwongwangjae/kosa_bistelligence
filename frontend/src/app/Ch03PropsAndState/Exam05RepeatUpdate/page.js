"use client"

import { useState } from "react";

function Exam05RepeatUpdate(){
    const [number, setNumber] = useState(0);

    //이벤트 처리 함수
    const addNumber1 = () => {
        //업데이트 도중에 업데이트가 되면 업데이트 후에 업데이트 되는 것이 아님
        //비동기로 두개가 같이 실행
        //하나의 상태변경이 완전히 끝나지 않은 상태에서 다른 상태 변경을 할 수 없다.
        setNumber(number + 1);
        setNumber(number + 1);
    };

    const addNumber2 = () => {
        setNumber(prevNumber => prevNumber + 1);
        setNumber(prevNumber => prevNumber + 1);
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam05RepeatUpdate
            </div>
            <div className="card-body">
                <p>{number}</p>
                <button className="mt-2 btn btn-info" onClick={addNumber1}>숫자 증가(1)</button>
                <button className="mt-2 btn btn-info" onClick={addNumber2}>숫자 증가(2)</button>
            </div>  
        </div>
    );
}

export default Exam05RepeatUpdate;