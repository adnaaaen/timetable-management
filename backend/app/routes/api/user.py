from fastapi import HTTPException, APIRouter, Depends
from sqlalchemy.orm import Session
from app.crud.user import user as crud
from app.schemas.user import UserLogin
from app.schemas.professor import ProfessorSchema
from app.db import get_db

router = APIRouter()

@router.post("/api/login", response_model=ProfessorSchema)
async def login_user(request: UserLogin, db: Session = Depends(get_db)) -> ProfessorSchema:
    user = crud.login(user=request, db=db)
    if not user:
        raise HTTPException(status_code=404, detail="invalid email or password")
    return user


