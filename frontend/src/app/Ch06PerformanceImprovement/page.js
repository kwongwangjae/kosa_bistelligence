import Link from "next/link";

export default function Page() {
    return (
        <div className="card">
            <div className="card-header">Ch06. Performance</div>
            <div className="card-body">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link href="/Ch06PerformanceImprovement/Exam01UseMemo">Exam01UseMemo</Link></li>
                    <li className="nav-item"><Link href="/Ch06PerformanceImprovement/Exam02UseCallback">Exam02UseCallback</Link></li>
                    <li className="nav-item"><Link href="/Ch06PerformanceImprovement/Exam03ReactMemo">Exam03ReactMemo</Link></li>
                </ul>
            </div>
        </div>
    );
}
