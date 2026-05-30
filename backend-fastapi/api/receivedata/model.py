from fastapi import UploadFile
from dataclasses import dataclass

from pydantic import BaseModel


class BodyJsonRequest(BaseModel):
    mid: str     #필수값
    bno: int = 1 #옵션값
    
class BodyUrlEncodeRequest(BaseModel):
    mid: str     #필수값
    bno: int = 1 #옵션값
    
class BodyMultipartFormDataRequest(BaseModel):
    btitle : str #필수값
    battach: UploadFile | None = None #옵션값
    