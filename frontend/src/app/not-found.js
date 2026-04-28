import Link from "next/link";

function NotFound() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                404 - Not Found
            </div>
            <div className="card-body">
                <h4>요청하신 페이지를 찾을 수 없습니다.</h4>
                <p>입력하신 주소가 정확한지 확인해주세요.</p>
                <Link href="/">홈으로 가기</Link>
            </div>  
        </div>
    );
}

export default NotFound;  