
from pydantic import EmailStr
from pydantic import BaseModel
from pydantic import Field
from typing import Annotated
from pydantic import ValidationError, field_validator, model_validator
import re
from fastapi.exceptions import RequestValidationError

class MemberJoinRequest(BaseModel):
    mid : Annotated[str, Field(
        min_length=4, max_length=12,
        pattern="^[a-zA-Z][a-zA-Z0-9_]*$"
    )]
    mname: Annotated[str, Field(
        min_length=2, max_length=10
    )]
    mpassword: Annotated[str, Field(
        min_length=6, max_length=12
    )]
    mpassword_confirm: Annotated[str, Field(
        min_length=6, max_length=12
    )]
    memail: EmailStr
    mphone: Annotated[str | None, Field(
        pattern=r"^[0-9]{3}-[0-9]{4}-[0-9]{4}$"
    )] = None
    mage: Annotated[int | None, Field(ge=0, le=100, default=None)]
    
    @classmethod
    @field_validator("mpassword","mpassword_confirm")
    def password_validator(cls, v: str) -> str:
        """비밀번호에 영문·숫자·특수문자가 각각 1자 이상 포함되어야 함"""
        if not re.search(r'[A-Za-z]', v):
            raise RequestValidationError("비밀번호에 영문자가 1자 이상 포함되어야 합니다.")
        if not re.search(r'\d', v):
            raise RequestValidationError("비밀번호에 숫자가 1자 이상 포함되어야 합니다.")
        if not re.search(r'[!@#$%^&*(),.?\":{}|<>]', v):
            raise RequestValidationError("비밀번호에 특수문자가 1자 이상 포함되어야 합니다.")
        return v
    
    @model_validator(mode="after")
    def password_match_validator(cls, v):
        """비밀번호와 비밀번호 확인이 일치해야 함"""
        if v.mpassword != v.mpassword_confirm:
            raise ValidationError("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
        return v