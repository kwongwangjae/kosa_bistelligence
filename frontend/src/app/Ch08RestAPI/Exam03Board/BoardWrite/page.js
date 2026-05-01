"use client"
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createBoard } from "@/apis/BoardApi";

function BoardWrite() {
    const [board, setBoard] = useState({ btitle: "", bcontent: "" });
    const router = useRouter();
    const inputFile = useRef();

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("btitle", board.btitle);
            formData.append("bcontent", board.bcontent);
            
            if (inputFile.current.files.length > 0) {
                formData.append("battach", inputFile.current.files[0]);
            }

            await createBoard(formData);
            alert("게시물이 성공적으로 추가되었습니다.");
            router.push("/Ch08RestAPI/Exam03Board/BoardList");
        } catch (error) {
            console.error("Failed to add board:", error);
            alert("게시물 추가에 실패했습니다.");
        }
    };

    const handleCancel = () => {
        router.back();
    };

    return (
        <div className="card">
            <div className="card-header">Board Write</div>
            <div className="card-body">
                <div>
                    <div className="mb-2">
                        <label htmlFor="btitle" className="form-label">btitle</label>
                        <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="bcontent" className="form-label">bcontent</label>
                        <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="battach" className="form-label">battach</label>
                        <input type="file" className="form-control" name="battach" ref={inputFile}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-sm me-2" onClick={handleAdd}>추가</button>
                        <button className="btn btn-primary btn-sm" onClick={handleCancel}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardWrite;
