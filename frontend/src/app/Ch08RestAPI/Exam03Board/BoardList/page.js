"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { getBoardList } from "@/apis/BoardApi";

function BoardList() {
    const [boards, setBoards] = useState([]);
    const [pager, setPager] = useState(null);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await getBoardList(pageNo);
                setBoards(response.data.boards);
                setPager(response.data.pager);
            } catch (error) {
                console.error("Failed to fetch boards, using mock data:", error);
                // Mock data as fallback
                setBoards([
                    { bno: 1, btitle: "서버 연결 실패 - 샘플 제목 1", bwriter: "admin", bdate: new Date().getTime(), bhitcount: 5 },
                    { bno: 2, btitle: "서버 연결 실패 - 샘플 제목 2", bwriter: "user1", bdate: new Date().getTime(), bhitcount: 12 },
                    { bno: 3, btitle: "서버 연결 실패 - 샘플 제목 3", bwriter: "user2", bdate: new Date().getTime(), bhitcount: 0 },
                ]);
                setPager({
                    totalRows: 3,
                    totalPageNo: 1,
                    totalGroupNo: 1,
                    groupNo: 1,
                    startPageNo: 1,
                    endPageNo: 1,
                    pageNo: 1
                });
            }
        };
        fetchBoards();
    }, [pageNo]);

    const changePageNo = (no) => {
        setPageNo(no);
    };

    return (
        <div className="card">
            <div className="card-header">Board List</div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>날짜</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.map(board => (
                            <tr key={board.bno}>
                                <td>{board.bno}</td>
                                <td><Link href={`/Ch08RestAPI/Exam03Board/BoardRead?bno=${board.bno}`}>{board.btitle}</Link></td>
                                <td>{board.bwriter}</td>
                                <td>{new Date(board.bdate).toLocaleDateString()}</td>
                                <td>{board.bhitcount || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {/* 페이징 UI */}
                {pager && (
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary btn-sm me-1" onClick={() => changePageNo(1)}>처음</button>
                        {pager.groupNo > 1 && (
                            <button className="btn btn-outline-info btn-sm me-1" onClick={() => changePageNo(pager.startPageNo - 1)}>이전</button>
                        )}
                        {Array.from({length: (pager.endPageNo - pager.startPageNo + 1)}, (_, i) => pager.startPageNo + i).map(no => (
                            <button key={no} 
                                    className={`btn btn-sm me-1 ${no === pageNo ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => changePageNo(no)}>
                                {no}
                            </button>
                        ))}
                        {pager.groupNo < pager.totalGroupNo && (
                            <button className="btn btn-outline-info btn-sm me-1" onClick={() => changePageNo(pager.endPageNo + 1)}>다음</button>
                        )}
                        <button className="btn btn-outline-primary btn-sm" onClick={() => changePageNo(pager.totalPageNo)}>맨끝</button>
                    </div>
                )}

                <div className="mt-3">
                    <Link href="/Ch08RestAPI/Exam03Board/BoardWrite" className="btn btn-success btn-sm">글쓰기</Link>
                </div>
            </div>
        </div>
    );
}

export default BoardList;
