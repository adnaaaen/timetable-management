from fastapi import APIRouter, HTTPException
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends
from db import get_db
from models.subject import Subject
from core import dependency
from schemas import subject
from crud.subject import subject as crud
router = APIRouter()

@router.get("/api/subject", response_model=List[subject.SubjectSchema])
async def list_subjects(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> List[subject.SubjectSchema]:
    subjects = crud.read(db=db, skip=skip, limit=limit) 
    if not subject:
        raise HTTPException(status_code=404, detail="not subjects are there!")
    return subjects

@router.post("/api/subject", response_model=subject.SubjectSchema)
async def create_subject(request: subject.SubjectCreateSchema,db: Session = Depends(get_db)) -> subject.SubjectSchema:
   is_subject_exist =  dependency.get_that_by_this(key="name", value=request.name, db=db, model=Subject)
   if not is_subject_exist:
       new_subject = crud.create(db=db, new_subject=request)
       return new_subject
   raise HTTPException(status_code=404, detail="subject already exists")

@router.delete("/api/subject", response_model=subject.SubjectSchema)
async def delete_subject(id: int, db: Session = Depends(get_db)) -> subject.SubjectSchema:
    is_subject_exists = dependency.get_that_by_this(key="id", value=id, db=db, model=Subject)
    if is_subject_exists:
        deleted_subject = crud.delete(db=db, id=id)
        return deleted_subject 
    raise HTTPException(status_code=404, detail="No subject with this id!")
