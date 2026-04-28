

function Layout({children}){
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam10NestedLayOut
            </div>
            <div className="card-body">
                {children}
            </div>  
        </div>
    );
}

export default Layout;