function Exam03Condition() {
  const var1 = "리액트";
  const var2 = false;
  const var3 = 0;
  let var4; //undefined
  return (
    <div className="card">
      <div className="card-header">
        Component: Exam03Condition
      </div>
      <div className="card-body">
        <>
          <h6 className="text-info">삼항 연산식을 이용한 선택 렌더링</h6>
          <div>{var1 === "리액트" ? <p>내용1</p> : <p>내용 없음</p>}</div>
          <div>{var1 !== "리액트" ? <p>내용2</p> : null}</div>
          <h6 className="mt-4 text-info">&& 을 이용한 선택 렌더링</h6>
          <div>{var1 === "리액트" && <p>내용3</p>}</div>
          <div>{var1 && <p>내용4</p>}</div>
          <div>{var2 && <p>내용5</p>}</div>
          <div>{var3 && <p>내용6</p>}</div>
          <div>{var4 && <p>내용7</p>}</div>
          
          <h6 className="mt-4 text-info">|| 을 이용한 선택 렌더링</h6>
          <div>{var1 || <p>내용8</p>}</div>
          <div>{var2 || <p>내용9</p>}</div>
          <div>{var3 || <p>내용10</p>}</div>
          <div>{var4 || <p>내용11</p>}</div>
        </>
      </div>
    </div>
  );
}

export default Exam03Condition;
