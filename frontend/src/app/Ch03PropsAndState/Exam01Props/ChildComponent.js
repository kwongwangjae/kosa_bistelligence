
function ChildComponent({
    name, 
    version,
    children
}) {
    return (
        <div className="card">
            <div className="card-header">
                ChildComponent
            </div>
            <div className="card-body">
                <p>이름: {name}</p>
                <p>버전: {version}</p>
                {children}
            </div>
        </div>
    );
}

export default ChildComponent;