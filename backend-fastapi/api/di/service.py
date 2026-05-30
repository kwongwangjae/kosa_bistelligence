from datetime import datetime
from typing import Annotated
from fastapi import Depends
from api.di.dao import MemberDao, MemberDaoDep

class MemberService:
    def __init__(self, memberDao: MemberDaoDep) -> None:
        self.memberDao = memberDao
    
    def get_member(self) -> dict:
        member = self.memberDao.select()
        return member
        
    def join(self) -> dict:
        member = self.memberDao.insert()
        return member
        
MemberServiceDep = Annotated[MemberService, Depends(MemberService)]

# 모듈 싱글톤 생성
# member_service_instance = MemberService()
# def get_member_service():
#     return member_service_instance