"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getBoard, deleteBoard } from "@/apis/BoardApi";

function BoardRead() {
    const searchParams = useSearchParams();
    const bno = searchParams.get("bno");
    // pageNo 변수를 명확하게 정의합니다.
    const pageNo = searchParams.get("pageNo") || "1";
    const router = useRouter();
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const response = await getBoard(bno);
                setBoard(response.data);
            } catch (error) {
                console.error("Failed to fetch board:", error);
            }
        };
        if (bno) fetchBoard();
    }, [bno]);

    const handleRemove = async () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            try {
                await deleteBoard(bno);
                alert("삭제되었습니다.");
                router.push("/Ch08RestAPI/Exam03Board/BoardList?pageNo=" + pageNo);
            } catch (error) {
                console.error("Failed to delete board:", error);
                alert("삭제에 실패했습니다.");
            }
        }
    };

    if (!board) return <div className="p-3">Loading...</div>;

    return (
        <div className="card">
            <div className="card-header">Board Read</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <p><strong>bno:</strong> {board.bno}</p>
                        <p><strong>btitle:</strong> {board.btitle}</p>
                        <p><strong>bcontent:</strong> {board.bcontent}</p>
                        <p><strong>bwriter:</strong> {board.bwriter}</p>
                        <p><strong>bdate:</strong> {new Date(board.bdate).toLocaleDateString()}</p>
                        <p><strong>bhitcount:</strong> {board.bhitcount}</p>
                        <p><strong>battachoname:</strong> {board.battachoname || "없음"}</p>
                        <p><strong>battachtype:</strong> {board.battachtype || "없음"}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        {board.battachoname && (
                            <img src={`http://localhost:8080/board/battach/${board.bno}`} 
                                 alt="attachment" 
                                 style={{ maxWidth: "100%", maxHeight: "300px" }} 
                                 className="img-thumbnail" />
                        )}
                    </div>
                </div>

                <div className="mt-3">
                    <Link href={"BoardList?pageNo=" + pageNo} className="btn btn-info btn-sm me-2">
                        목록
                    </Link>
                    <Link href={`BoardUpdate?bno=${board.bno}`} className="btn btn-warning btn-sm me-2">
                        수정
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={handleRemove}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BoardRead;
