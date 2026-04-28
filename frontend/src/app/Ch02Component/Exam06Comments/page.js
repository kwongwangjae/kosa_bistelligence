"use client"

function Exam06Comments() {
    // 1. 자바스크립트 영역 (JSX 외부)
    // 여기서는 일반적인 자바스크립트 주석인 '//' 한 줄 주석이나
    /* 
       '/* 여러 줄 주석 * /' 을
       그대로 사용할 수 있습니다.
    */

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam06Comments (주석 작성법)
            </div>
            <div className="card-body">
                {/* 2. JSX 영역 내부 */}
                {/* JSX 태그 사이에서는 반드시 중괄호 블록 안에 주석 기호를 써야 합니다. */}
                {/* <p>이 단락은 주석 처리되어 화면에 보이지 않습니다.</p> */}
                
                <p>React(JSX) 내부에서는 주석을 어떻게 작성하는지 보여주는 예제입니다.</p>
                
                <p 
                    // 태그의 속성을 적는 괄호 내부에서는 이렇게 한 줄 주석도 가능하지만, 
                    // 가급적이면 태그 밖에서 중괄호 주석을 쓰는 것이 깔끔합니다.
                    className="text-primary fw-bold"
                >
                    크롬 개발자 도구의 [요소(Elements)] 탭을 확인해 보세요.
                </p>
            </div>
        </div>
    );
}

export default Exam06Comments;