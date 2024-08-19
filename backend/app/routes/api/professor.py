from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.db import get_db
from app.schemas import professor
from app.core import dependency
from app.models.professors import Professors
from app.crud.professor import professor as crud

router = APIRouter()


@router.get("/api/professor", response_model=List[professor.ProfessorSchema])
async def list_professors(
    db: Session = Depends(get_db), skip: int = 0, limit: int = 100
) -> List[professor.ProfessorSchema]:
    users = crud.read(db=db, skip=skip, limit=limit)
    if not users:
        raise HTTPException(status_code=404, detail="No user left")
    return users


@router.post("/api/professor", response_model=professor.ProfessorSchema)
async def create_professor(
    request: professor.ProfessorCreateSChema, db: Session = Depends(get_db)
) -> professor.ProfessorSchema:
    is_existed_user = dependency.get_that_by_this(
        db=db, key="email", model=Professors, value=request.email
    )
    if not is_existed_user:
        return crud.create(db=db, new_professor=request)
    raise HTTPException(status_code=404, detail="user already exist")


@router.delete("/api/professor", response_model=professor.ProfessorSchema)
async def delete_professor(
    id: int, db: Session = Depends(get_db)
) -> professor.ProfessorSchema:
    is_existed_user = dependency.get_that_by_this(
        db=db, key="id", value=id, model=Professors
    )
    if not is_existed_user:
        raise HTTPException(status_code=404, detail="no user found")
    return crud.delete(db=db, id=id)
