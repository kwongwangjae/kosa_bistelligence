import Link from "next/link";

export default function Page() {
    return (
        <div className="card">
            <div className="card-header">Ch04. LifeCycle</div>
            <div className="card-body">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link href="/Ch04LifeCycle/Exam01CallbackMethod">Exam01CallbackMethod</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Ch04LifeCycle/Exam02UseEffect">Exam02UseEffect</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
