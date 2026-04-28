"use client"

import ChildComponentA from "./ChildComponentA";

function Exam07EvnetHanding(){
    
    const fun1 = (event) => {
        console.log("버튼1 클릭")
        console.log(event.target.name)
        console.log(event.type)
    }

    const fun2 = (arg, event) => {
        console.log(`${arg} 클릭`);
        console.log(event.target.name)
        console.log(event.type)
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam07EvnetHanding Header
            </div>
            <div className="card-body">
                <button className="btn btn-info bnt-sm me-2" onClick={fun1}>버튼1</button>
                <button className="btn btn-info bnt-sm me-2" onClick={fun2}>버튼2</button>

                <hr/>

                {/* React 컴포넌트는 이벤트 속성을 작성할 수 없다. */}
                {/* <ChildComponentA onClick={fun1}/> */}
            </div>
        </div>
    );
}

export default Exam07EvnetHanding;