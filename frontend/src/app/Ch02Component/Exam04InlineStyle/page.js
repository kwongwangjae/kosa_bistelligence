function Exam04InlineStyle() {
  const name = "리액트";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "24px",
    fontWeight: "bold",
    padding: 8
  };

  style.backgroundColor = "blue";

  return (
    <div className="card">
      <div className="card-header">
        Component: Exam04InlineStyle
      </div>
      <div className="card-body">
        <div style={style}>{name}</div>
        <div style={{
          backgroundColor: name !== "리액트" ?"orange" : "red",
          color: "green",
          fontSize: "24px",
          fontWeight: "bold",
          padding: 8
        }}>
          {name}
        </div>
      </div>
    </div>
  );
}

export default Exam04InlineStyle;
