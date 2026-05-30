
from api.database.config.entity_base import Base
from sqlalchemy import Integer
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.types import String, Integer, Boolean

# 회원 엔티티 (Members)
class Member(Base):
    __tablename__ = "members"

    mid: Mapped[str] = mapped_column(primary_key=True, index=True)
    mname: Mapped[str] = mapped_column(nullable=False)
    memail: Mapped[str] = mapped_column(nullable=False, unique=True)
    mpassword: Mapped[str] = mapped_column(nullable=False)
    menabled: Mapped[int] = mapped_column(default=1)   
    mrole: Mapped[str] = mapped_column(nullable=False)