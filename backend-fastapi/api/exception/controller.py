from fastapi import status
from fastapi import HTTPException
import logging

from fastapi import APIRouter, Request
from api.exception.handler import BusinessException

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/exception", tags=["exception"])


@router.get("/http-exception")
async def list():
    logger.info("http-exception 처리 로직 실행")
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="API를 찾을 수 없습니다.",
    )
    
@router.get("/business-exception")
async def business_exception():
    logger.info("business-exception 처리 로직 실행")
    raise BusinessException("비즈니스 예외가 발생했습니다.", "A0001")   
    
@router.get("/unhandled-exception")
async def unhandled_exception():
    logger.info("unhandled-exception 처리 로직 실행")
    raise Exception("예외가 발생했습니다.")
    