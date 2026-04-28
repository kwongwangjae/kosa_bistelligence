"use client";

import { useEffect } from "react";

function ErrorComponent({error}) {
    useEffect(() => {
        console.group("[런타임 에러 내용]");
        console.error(error);
        console.groupEnd();
    }, [error]);    
    
    return (
        <div className="card mt-2">
            <div className="card-header">
                ErrorComponent
            </div>
            <div className="card-body">
                <h4>문제가 발생했습니다.</h4>
                <p>잠시 후 다시 시도해주세요.</p>
            </div>  
        </div>
    );
}

export default ErrorComponent;   