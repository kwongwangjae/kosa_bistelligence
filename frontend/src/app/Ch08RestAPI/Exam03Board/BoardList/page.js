"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { getBoardList } from "@/apis/BoardApi";

function BoardList() {
    const [page, setPage] = useState(null);
    const [pageNo, setPageNo] = useState(1);
    
    // 현재 로그인된 사용자 정보 (임시)
    const authContext = { user: localStorage.getItem("mid") || "" };

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await getBoardList(pageNo);
                const boards = response.data.boards;
                const pager = response.data.pager;
                // 페이지 배열 생성 ([1, 2, 3, 4, 5] 등)
                pager.pageArray = Array.from(
                    { length: (pager.endPageNo - pager.startPageNo + 1) }, 
                    (_, i) => pager.startPageNo + i
                );
                setPage({ boards, pager });
            } catch (error) {
                console.error("Failed to fetch boards:", error);
            }
        };
        fetchBoards();
    }, [pageNo]);

    if (!page) return <div className="p-3">Loading...</div>;

    return (
        <div className="card">
            <div className="card-header">BoardList</div>
            <div className="card-body">
                <div>
                    <div className="mb-3">
                        {authContext.user !== "" ? (
                            <Link href="/Ch08RestAPI/Exam03Board/BoardWrite" className="btn btn-success btn-sm">생성</Link>
                        ) : ""}
                    </div>
                    <table className="table table-striped table-bordered table-hover">
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
                            {page.boards.map(board => (
                                <tr key={board.bno}>
                                    <td>{board.bno}</td>
                                    <td style={{ width: "40%" }}>
                                        {authContext.user !== "" ? (
                                            <Link href={`BoardRead?bno=${board.bno}&pageNo=${page.pager.pageNo}&caller=list`}>
                                                {board.btitle}
                                                {board.battachoname && <span className="ms-1 text-primary" title="첨부파일 있음">📎</span>}
                                            </Link>
                                        ) : (
                                            <>
                                                {board.btitle}
                                                {board.battachoname && <span className="ms-1 text-muted">📎</span>}
                                            </>
                                        )}
                                    </td>
                                    <td>{board.bwriter}</td>
                                    <td>{new Date(board.bdate).toLocaleDateString()}</td>
                                    <td>{board.bhitcount}</td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                    <button className="btn btn-outline-primary btn-sm me-1" onClick={() => setPageNo(1)}>처음</button>
                                    {(page.pager.groupNo > 1) &&
                                        <button className="btn btn-outline-info btn-sm me-1" onClick={() => setPageNo(page.pager.startPageNo - 1)}>이전</button>
                                    }
                                    {page.pager.pageArray.map(i =>
                                        <button className={`btn ${i === page.pager.pageNo ? "btn-danger" : "btn-outline-success"} btn-sm me-1`} 
                                                key={i} onClick={() => setPageNo(i)}>{i}</button>
                                    )}
                                    {page.pager.groupNo < page.pager.totalGroupNo &&
                                        <button className="btn btn-outline-info btn-sm me-1" onClick={() => setPageNo(page.pager.endPageNo + 1)}>다음</button>
                                    }
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => setPageNo(page.pager.totalPageNo)}>맨끝</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BoardList;
