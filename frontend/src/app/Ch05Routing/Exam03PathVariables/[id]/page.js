"use client"
import { useParams } from "next/navigation";

function Page() {
    const params = useParams();
    const id = params.id;

    return (
        <div className="card">
            <div className="card-header">Path Variable Detail</div>
            <div className="card-body">
                <p>Received ID: <strong>{id}</strong></p>
            </div>
        </div>
    );
}

export default Page;
