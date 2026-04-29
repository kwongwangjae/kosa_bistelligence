"use client"
import Link from "next/link";

function Exam03PathVariables() {
    return (
        <div className="card">
            <div className="card-header">Exam03PathVariables</div>
            <div className="card-body">
                <Link href="/Ch05Routing/Exam03PathVariables/1" className="btn btn-primary btn-sm me-2">Item 1</Link>
                <Link href="/Ch05Routing/Exam03PathVariables/100" className="btn btn-success btn-sm">Item 100</Link>
            </div>
        </div>
    );
}

export default Exam03PathVariables;
