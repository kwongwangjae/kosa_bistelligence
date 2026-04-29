"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function Exam01Navigation() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/");
    };

    return (
        <div className="card">
            <div className="card-header">Exam01Navigation</div>
            <div className="card-body">
                <h6>1. Using Link Component</h6>
                <Link href="/" className="btn btn-info btn-sm me-2">Go Home (Link)</Link>
                
                <h6 className="mt-4">2. Using useRouter Hook</h6>
                <button className="btn btn-warning btn-sm" onClick={handleNavigate}>Go Home (Programmatic)</button>
            </div>
        </div>
    );
}

export default Exam01Navigation;
