import Link from "next/link";

export default function Page() {
    return (
        <div className="card">
            <div className="card-header">Ch07. GlobalState</div>
            <div className="card-body">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link href="/Ch07GlobalState/Exam01ColorContext">Exam01ColorContext</Link></li>
                    <li className="nav-item"><Link href="/Ch07GlobalState/Exam02AuthContext">Exam02AuthContext</Link></li>
                </ul>
            </div>
        </div>
    );
}
