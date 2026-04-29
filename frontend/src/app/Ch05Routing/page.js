import Link from "next/link";

export default function Page() {
    return (
        <div className="card">
            <div className="card-header">Ch05. Routing</div>
            <div className="card-body">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link href="/Ch05Routing/Exam01Navigation">Exam01Navigation</Link></li>
                    <li className="nav-item"><Link href="/Ch05Routing/Exam02QueryString">Exam02QueryString</Link></li>
                    <li className="nav-item"><Link href="/Ch05Routing/Exam03PathVariables">Exam03PathVariables</Link></li>
                </ul>
            </div>
        </div>
    );
}
