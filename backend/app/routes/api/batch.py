from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from typing import List
from app.models.batches import Batch
from app.core import dependency
import app.schemas.batch as schemas
from app.crud.batch import batch as crud

router = APIRouter()


@router.get("/api/batch", response_model=List[schemas.BatchSchema])
async def list_batch(
    db: Session = Depends(get_db), skip: int = 0, limit: int = 100
) -> List[schemas.BatchSchema]:
    batches = crud.read(db=db, skip=skip, limit=limit)
    if not batches:
        raise HTTPException(status_code=404, detail="no batches found")
    return batches


@router.post("/api/batch", response_model=schemas.BatchSchema)
async def create_batch(
    request: schemas.BatchCreateSchema, db: Session = Depends(get_db)
) -> schemas.BatchSchema:
    is_batch_exists = dependency.get_that_by_this(
        key="name", value=request.name, db=db, model=Batch
    )
    if not is_batch_exists:
        return crud.create(db=db, new_batch=request)
    raise HTTPException(status_code=404, detail="batch already exists")


@router.delete("/api/batch", response_model=schemas.BatchSchema)
async def delete_batch(id: int, db: Session = Depends(get_db)) -> schemas.BatchSchema:
    is_batch_exists = dependency.get_that_by_this(
        key="id", value=id, db=db, model=Batch
    )
    if is_batch_exists:
        return crud.delete(db=db, id=id)
    raise HTTPException(status_code=404, detail="batch not exists")
