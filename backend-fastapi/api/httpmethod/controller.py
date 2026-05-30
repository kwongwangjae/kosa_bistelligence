# 로거 생성
import logging
logger = logging.getLogger(__name__)

# 라우터 생성 
from fastapi import APIRouter
router = APIRouter(prefix="/http-method", tags=["http-method"])


# 회웝가입 엔드포인드 정리
@router.post("/join")
async def join():
    logger.info("회원 가입 처리 로직 실행")
    return {"message": "회원가입 성공"}


@router.post("/login")
async def login():
    logger.info("로그인 처리 로직 실행")
    return {
        "message": "로그인 성공",
        "access_token": "xxxxxxxxx-yyyyyyyy-zzzzz"
    }
    
@router.get("/info")
async def info():
    logger.info("회원정보 처리 로직 실행")
    return {
        "mid": "1",
        "mname": "홍길동",
        "memail": "hong@gmail.com"
    }
    

