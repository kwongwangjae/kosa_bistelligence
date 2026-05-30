from IPython.core import display_functions
from ast import alias
import logging
from typing import Annotated
from fastapi import APIRouter, Query, Path, Body, Form, Header, UploadFile
from api.receivedata.model import BodyJsonRequest, BodyMultipartFormDataRequest

import time
import os

# 로거 생성
logger = logging.getLogger(__name__)
    
# 라우터 생성
router = APIRouter(prefix="/receivedata", tags=["receive-data"])


@router.get("/auto-query-string")
async def auto_query_string(
    mid: str,          # 필수 파라미터
    bno: int = 1
):
    logger.info("자동 쿼리 스트링 테스트")
    return {
        "mid": mid,
        "bno": bno
    }
    
    
@router.get("/auto-body-json")
async def auto_body_json( 
    req: BodyJsonRequest
):
    logger.info("자동 바디 테스트")
    return {
        "mid": req.mid,
        "bno": req.bno
    }
    
@router.post("/auto-body-json")
async def auto_body_json(
    req: BodyJsonRequest
):
    logger.info("자동 바디 테스트")
    return {
        "mid": req.mid,
        "bno": req.bno
    }

@router.get("/fun-query")
async def fun_query(
    mid: Annotated[int, Query(alias = "memberId")],
    bno: Annotated[int, Query(alias="boardNo")] = 1
):
    logger.info(" 함수형 쿼리 테스트")
    return {
        "mid": mid,
        "bno": bno
    }   
    
@router.get("/fun-path/{memberId}/{boardNo}")
async def fun_path(
    mid: Annotated[int, Path(alias="memberId")],
    bno: Annotated[int, Path(alias="boardNo")] = 1
):
    logger.info(" 함수형 패스 테스트")
    return {
        "mid": mid,
        "bno": bno
    }   

@router.post("/fun-body")
async def fun_body(
    req: Annotated[BodyJsonRequest, Body()]
):
    logger.info("함수형 바디 테스트")
    return {
        "mid": req.mid,
        "bno": req.bno
    }

@router.post("/fun-form-2")
async def fun_form_2(
    dto: Annotated[BodyMultipartFormDataRequest, Form()]
):
    logger.info("함수형 폼 테스트")
    if dto.battach:
        logger.info("파일이 전송되었습니다")
        contents = await dto.battach.read()
        saved_file = f"{time.time_ns()}-{ dto.battach.filename}"
        saved_dir = f"./uploads/{saved_file}"
        os.makedirs("./uploads", exist_ok=True)
        with open(saved_dir, "wb") as file:
            file.write(contents)
    else:
        logger.info("파일이 전송되지 않았습니다")
    return {
        "btitle": dto.btitle
    }


@router.post("/fun-form")
async def fun_form(
    btitle: Annotated[str, Form()],
    battach: Annotated[UploadFile | None, Form()] = None
):
    logger.info("함수형 폼 테스트")
    if battach and battach.filename:
        logger.info("파일이 전송되었습니다")
        contents = await battach.read()
        saved_file = f"{time.time_ns()}-{battach.filename}"
        saved_dir = f"./uploads/{saved_file}"
        os.makedirs("./uploads", exist_ok=True)
        with open(saved_dir, "wb") as file:
            file.write(contents)
    else:
        logger.info("파일이 전송되지 않았습니다")
    return {
        "btitle": btitle
    }

@router.get("/fun-header")
async def fun_header(
    user_agent: Annotated[str | None, Header()] = None
    ):
    logger.info("헤더 테스트")
    return {
        "user-agent": user_agent
    }   

