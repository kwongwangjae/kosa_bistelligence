"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getBoard, updateBoard } from "@/apis/BoardApi";

function BoardUpdate() {
    const searchParams = useSearchParams();
    const bno = searchParams.get("bno");
    const pageNo = searchParams.get("pageNo") || "1";
    const router = useRouter();
    
    const [board, setBoard] = useState({ btitle: "", bcontent: "" });
    const inputFile = useRef();
    const authContext = { user: localStorage.getItem("mid") || "" };

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const response = await getBoard(bno);
                // 본인 확인 (작성자만 수정 가능)
                if (authContext.user !== response.data.bwriter) {
                    alert("수정 권한이 없습니다.");
                    router.back();
                    return;
                }
                setBoard(response.data);
            } catch (error) {
                console.error("Failed to fetch board:", error);
            }
        };
        if (bno) fetchBoard();
    }, [bno, authContext.user, router]);

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("bno", bno);
            formData.append("btitle", board.btitle);
            formData.append("bcontent", board.bcontent);
            
            // 새 파일이 선택된 경우에만 추가
            if (inputFile.current.files.length > 0) {
                formData.append("battach", inputFile.current.files[0]);
            }

            await updateBoard(formData);
            alert("게시물이 성공적으로 수정되었습니다.");
            // 수정 완료 후 상세 보기로 이동 (기존 페이지 번호 유지)
            router.push(`/Ch08RestAPI/Exam03Board/BoardRead?bno=${bno}&pageNo=${pageNo}`);
        } catch (error) {
            console.error("Failed to update board:", error);
            alert("게시물 수정에 실패했습니다.");
        }
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="card">
            <div className="card-header">Board Update</div>
            <div className="card-body">
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label htmlFor="btitle" className="form-label">btitle</label>
                        <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange} required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="bcontent" className="form-label">bcontent</label>
                        <textarea className="form-control" name="bcontent" rows="5" value={board.bcontent} onChange={handleChange} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="battach" className="form-label">battach (변경 시 파일 선택)</label>
                        {board.battachoname && (
                            <div className="mb-1 text-muted small">기존 파일: {board.battachoname}</div>
                        )}
                        <input type="file" className="form-control" name="battach" ref={inputFile}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-sm me-2">수정</button>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancel}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BoardUpdate;
