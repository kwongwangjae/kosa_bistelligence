"use client"
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Exam02QueryString() {
    const searchParams = useSearchParams();
    const pageNo = searchParams.get("pageNo");
    const keyword = searchParams.get("keyword");

    return (
        <div className="card">
            <div className="card-header">Exam02QueryString</div>
            <div className="card-body">
                <p>Page No: {pageNo || "None"}</p>
                <p>Keyword: {keyword || "None"}</p>
                <hr/>
                <Link href="/Ch05Routing/Exam02QueryString?pageNo=1&keyword=react" className="btn btn-primary btn-sm me-2">
                    Set Query String
                </Link>
                <Link href="/Ch05Routing/Exam02QueryString" className="btn btn-secondary btn-sm">
                    Clear Query String
                </Link>
            </div>
        </div>
    );
}

export default Exam02QueryString;
