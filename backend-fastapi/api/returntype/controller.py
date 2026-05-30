from email.quoprimime import quote
import mimetypes
from fastapi import status
from fastapi import Response
from IPython.core import latex_symbols
from fastapi.responses import PlainTextResponse, HTMLResponse, JSONResponse, FileResponse
import logging
from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
from api.returntype.model import BoardResponse
from datetime import datetime
from dicttoxml import dicttoxml

class XMLResponse(Response):
    media_type = "application/xml"

# 로거 생성 
logger = logging.getLogger(__name__)

# 라우터 생성 
router = APIRouter(prefix="/returntype", tags=["returntype"])

# 템플릿 객체 얻기
templates = Jinja2Templates(directory="templates")

# 엔드포인트 정의
@router.get("/string", response_class=PlainTextResponse)
async def return_string():
    return "success"

@router.get("/html", response_class=HTMLResponse)
async def return_html(request:Request):
    return templates.TemplateResponse("index.html", {"request": request})

@router.get("/model", 
            # 응답모델을 json으로 
            response_class=JSONResponse,
            # 응답모델의 타입 지정 
            response_model=BoardResponse,
            # 응답모델에 설정되지 않은 값을 제외 
            response_model_exclude_unset=True
            )
async def return_model():
    return BoardResponse(
        bno=1,
        btitle="게시글 제목",
        bcontent="게시글 내용",
        bwriter="홍길동",
        bdate=datetime.now(),
        bhitcount=0,
        battachoname="안녕하세요",
        battachsname="안녕하세요",
        battachtype="안녕하세요",
    )

@router.get("/list",
            response_class=JSONResponse,
            response_model=list[BoardResponse],
            response_model_exclude_unset=True
            )
async def return_list():
    board_list = []
    for i in range(1, 4):
        board = BoardResponse(
            bno = i,
            btitle = "게시글 제목",
            bcontent = "게시글 내용",
            bwriter = "홍길동",
            bdate = datetime.now(),
            bhitcount = 0
        )
        board_list.append(board)
    return board_list


@router.get("/xml",
            response_class=XMLResponse,
            response_model_exclude_unset=True
            )
async def return_xml():
    board_list = []
    for i in range(1, 4):
        board = BoardResponse(
            bno = i,
            btitle = "게시글 제목",
            bcontent = "게시글 내용",
            bwriter = "홍길동",
            bdate = datetime.now(),
            bhitcount = 0
        )
        # BoardResponse -> dict로 변환
        # model_dump(exclude_none=True) : None값을 제외한 dict로 변환
        board_dict = board.model_dump(exclude_none=True)
        board_list.append(board_dict)
        
    # dict 정보를 xml 변환 
    xml_data = dicttoxml(board_list, custom_root='boards', attr_type=False)
    return XMLResponse(
        content=xml_data,
        media_type="application/xml"
        )

@router.get("/status-code",
            response_class = JSONResponse,
            response_model = BoardResponse | None)
async def return_status_code(response:Response):
    if False:
        pass
    else:
        response.status_code = status.HTTP_204_NO_CONTENT
        return None
    
@router.get("/file", response_class=FileResponse)
async def return_file():
    # DB에서 읽은 데이터
    battachname = "사진1.jpg"
    battachtype = "image/jpeg"
    
    file_name = "안녕하세요.png"
    file_path = f"/home/kwongwangjae/IdeaProjects/kosa_bistelligence/backend-fastapi/image.png"
    #  _  mimetypes.guess_type(file_path)는 튜플형태로 반환 
    # (media_type, encoding) -> media_type만 사용하고 encoding은 사용하지 않기 때문에 _로 받음
    media_type, _ = mimetypes.guess_type(file_path) 
    file_encoded_name = quote(file_name)
    return FileResponse(
        path=file_path,
        media_type=media_type,
        headers={
            "content-disposition": f"attachment; filename*=UTF-8''{file_encoded_name}"
        }
    )

    

    
    
