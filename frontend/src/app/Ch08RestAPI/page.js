import Link from "next/link";

export default function Page() {
    return (
        <div className="card">
            <div className="card-header">Ch08. RestAPI</div>
            <div className="card-body">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link href="/Ch08RestAPI/Exam01AsyncControl">Exam01AsyncControl</Link></li>
                    <li className="nav-item"><Link href="/Ch08RestAPI/Exam02Auth">Exam02Auth</Link></li>
                    <li className="nav-item"><Link href="/Ch08RestAPI/Exam03Board/BoardList">Exam03Board/BoardList</Link></li>
                    <li className="nav-item"><Link href="/Ch08RestAPI/Exam04Member/Join">Exam04Member/Join</Link></li>
                </ul>
            </div>
        </div>
    );
}
