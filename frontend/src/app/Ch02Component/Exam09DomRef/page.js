"use client";

import { useRef } from "react";

function Exam09DomRef() {
    // DOM 객체 찾기
    // const email = document.querySelector("#email"); 실행 안됨
    // console.log("email", email);

    const emailRef = useRef();

    const handleClick = function(event) {
        // const email = document.querySelector("#email");
        const email = emailRef.current;
        email.style.backgroundColor = "yellow";
        email.focus();
        
        console.log("email", email);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam09DomRef
            </div>
            <div className="card-body">
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="email" className="visually-hidden">Email</label>
                        {/* react에서 id는 사용하지 마라. */}
                        <input ref={emailRef} type="text" id="email" style={{width:"200px"}} className="form-control" 
                            defaultValue={"email@example.com"}/>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-info" onClick={handleClick}>입력양식 포커스 및 스타일 변경</button>
                    </div>
                </form> 
            </div>
        </div>
    );
}

export default Exam09DomRef;