from fastapi import APIRouter, HTTPException
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends
from db import get_db
from models.timetable import Timetable
from core import dependency
from schemas import timetable as schema
from crud.timetable import timetable as crud

router = APIRouter()


@router.get("/api/timetable", response_model=List[schema.TimetableSchema])
async def list_timetables(
    db: Session = Depends(get_db),
) -> List[schema.TimetableSchema]:
    timetables = crud.read(db=db)
    if not timetables:
        raise HTTPException(status_code=404, detail="not timetables are there!")
    return timetables


@router.get("/api/timetableby", response_model=List[schema.TimetableSchema])
async def timetables_by_id(
    id: int, db: Session = Depends(get_db)
) -> List[schema.TimetableSchema]:
    return crud.by_id(db=db, id=id)


@router.post("/api/timetable", response_model=schema.TimetableSchema)
async def create_timetable(
    request: schema.TimetableCreateSchema, db: Session = Depends(get_db)
) -> schema.TimetableSchema:
    return crud.create(db=db, new_timetable=request)


@router.delete("/api/timetable", response_model=schema.TimetableDeleteSchema)
async def delete_timetable(
    id: int, db: Session = Depends(get_db)
) -> schema.TimetableDeleteSchema:
    is_timetable_exists = dependency.get_that_by_this(
        key="id", value=id, db=db, model=Timetable
    )
    if is_timetable_exists:
        return crud.delete(db=db, id=id)
    raise HTTPException(status_code=404, detail="No timetable with this id!")
