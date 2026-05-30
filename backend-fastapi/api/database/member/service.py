from sqlalchemy.util.typing import Annotated
from api.database.member.dao import MemberDaoDep
import logging
from passlib.context import CryptContext
from fastapi import Depends
from api.database.member.model import Member

logger = logging.getLogger(__name__)

# MemberService 클래스 정의
class MemberService:
    def __init__(self, member_dao: MemberDaoDep) -> None:
        self.logger = logging.getLogger(f"{__name__}.MemberService")
        self.member_dao = member_dao
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    
    async def join(self, member: Member) -> Member:
        # 비밀번호 암호화 
        member.mpassword = self.pwd_context.hash(member.mpassword)
        # 회원 저장
        return await self.member_dao.insert(member)
        
    

# 의존성 타입 별칭 정의 
MemberServiceDep = Annotated[MemberService, Depends(MemberService)]
