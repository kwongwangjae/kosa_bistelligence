from typing import Annotated
from fastapi import Depends
from datetime import datetime

class MemberDao:
    def select(self) -> dict:
        return {
            "mid": "kosa",
            "mname": "홍길동",
            "memail": "hhh@company.com"
        }
        
    def insert(self) -> dict:
        return {
            "mid": "kosa",
            "mname": "홍길동",
            "memail": "hhh@company.com",
            "mdate": datetime.now()
        }
        
        
MemberDaoDep = Annotated[MemberDao, Depends(MemberDao)]