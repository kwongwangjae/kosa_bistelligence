import logging 
from fastapi import APIRouter, Body, Form
from api.validation.model import MemberJoinRequest
from typing import Annotated


logger = logging.getLogger(__name__)
router = APIRouter(prefix="/validation", tags=["validation"])

@router.post("/member/join")
async def join(member: Annotated[MemberJoinRequest, Body()]):
    logger.info(member)
    return {
        "message": "회원가입 성공",
        "data": member
    }
