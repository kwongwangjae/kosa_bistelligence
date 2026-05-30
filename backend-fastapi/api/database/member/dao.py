from sqlalchemy.sql.annotation import Annotated
import logging


from fastapi import Depends
from sqlalchemy import Select
from api.database.config.desession import get_orm_session
from api.database.member.entity import Member

# 회원 DAO(Data Access Object) 클래스
class MemberDAO:
    def __init__(self, session = Depends(get_orm_session)):
        self.session = session
    
    async def get_all(self):
        result = await self.session.execute(Select(Member))
        return result.scalars().all()
    
    # 회원등록
    async def insert(self, member: Member) -> Member:
        self.session.add(member)
        await self.session.commit()
        await self.session.refresh(member)  
        return member


MemberDaoDep = Annotated[MemberDAO, Depends(MemberDAO)]
