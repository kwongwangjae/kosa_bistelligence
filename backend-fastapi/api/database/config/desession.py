# SQLAlchemy 설정
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import async_sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio import AsyncSession

# DB 커넥션 풀(비동기 데이터베이스 엔진) 설정 
engine = create_async_engine(
    "postgresql+asyncpg://postgres:postgres@localhost:5432/postgres",
    pool_size=5,                # DB 커넥션 풀의 기본 크기
    max_overflow=10,            # DB 커넥션 풀의 최대 크기
    pool_pre_ping=True,         # DB 커넥션 풀의 최소 크기
    echo=True                   # SQL 쿼리 출력
)

# ORM 작업 세션 팩토리 생성 
session_maker = async_sessionmaker(
    bind=engine,
    autoflush=True,
    autocommit=False,
    class_=AsyncSession,
    expire_on_commit=False
)

# ORM 작업 세션을 제공하는 제너레이터 생성 함수 정의 
# 트랜잭션 작업 처리를 위해 commit/rollback 처리
async def get_orm_session() -> AsyncGenerator[AsyncSession, None]:
    # 세션 생성
    session = session_maker()
    try: 
        # yield 키워드를 사용하면 메서드가 제너레이터임을 선언
        # yield 키워드를 만나면 메서드의 실행은 일시 중지되고 세션 객체 반환
        # yield 키워드 다음에 오는 코드는 세션이 다시 필요할 때 실행
        yield session
        # 세션에서 변경사항이 있다면 commit 처리
        await session.commit()
    except Exception as e:
        # 예외 발생 시 rollback 처리
        await session.rollback()
        raise e
    finally:
        # 세션 자원 반환 
        await session.close()