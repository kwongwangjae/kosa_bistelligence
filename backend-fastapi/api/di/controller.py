import logging
from typing import Annotated
from fastapi import APIRouter, Depends
from api.di.service import MemberService, MemberServiceDep

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/di", tags=["di"])
        
    

@router.get("/member-info")
async def member_info(
    memberService: MemberServiceDep
):
    logger.info(id(memberService))
    member = memberService.get_member()
    return member


@router.get("/member-join")
async def member_join(
    memberService: MemberServiceDep
):
    logger.info(id(memberService))
    member = memberService.join()
    return member



    
