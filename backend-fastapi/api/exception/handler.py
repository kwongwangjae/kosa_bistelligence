from fastapi import HTTPException
from fastapi import FastAPI
import logging

logger = logging.getLogger(__name__)

# 404 NOT FOUNT 처리기
from fastapi import Request

from fastapi.responses import JSONResponse
from fastapi import status

# 404 예외가 발생했을 때 예외를 처리하는 함수
async def not_found(request:Request, exc:Exception):
    logger.warning(f"404 : {request.method} {request.url}")
    return JSONResponse(
       content={
        "error-code": "A0001",
        "message": "API를 찾을 수 없습니다.",
        "details": "API 문서에서 경로를 확인해 주세요"
       },
       status_code=status.HTTP_404_NOT_FOUND,
    )

async def http_excption_handler(request: Request, e: HTTPException):
    logger.error(f"{request.method} {request.url} : {e.status_code} - {e.detail}")
    return JSONResponse(
        content={
            "error-code": "A0003",
            "message": "잘못된 요청입니다.",
            "details": e.detail
        },
        status_code=status.HTTP_400_BAD_REQUEST,
    )
    
class BusinessException(Exception):
    def __init__(self,
                 message: str,
                 error_code: str
                ):
        self.message = message
        self.error_code = error_code
        super().__init__(message)

async def business_exception_handler(request: Request, e: BusinessException):
    return JSONResponse(
        content={
            "error-code": e.error_code,
            "message": e.message,
        },
        status_code=status.HTTP_400_BAD_REQUEST,
    )

# 500 Server Error 처리기
async def internal_exception_handler(request: Request, e: Exception):
    logger.error(f"{request.method} {request.url} : {e}", exc_info=True)
    return JSONResponse(
        content={
            "error-code": "A0004",
            "message": "서비스에 일시적인 오류가 발생했습니다.",
            "details": "잠시 후 다시 시도해주세요."
        },
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
    )

# 예외 처리가 일괄 등록 함수
def register_exception_handler(app:FastAPI) -> None:
    # 404 예외 처리 등록
    app.exception_handler(404)(not_found)
    app.exception_handler(HTTPException)(http_excption_handler)
    app.exception_handler(BusinessException)(business_exception_handler)
    app.exception_handler(Exception)(internal_exception_handler)

