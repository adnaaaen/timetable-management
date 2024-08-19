from sqlalchemy.orm import Session
import app.schemas.batch as schema
from app.models.batches import Batch

class BatchCrud:
    def create(self, db: Session, new_batch: schema.BatchCreateSchema) -> schema.BatchSchema:
        batch = Batch(name=new_batch.name, display_name=new_batch.display_name, start_year=new_batch.start_year, end_year=new_batch.end_year)
        db.add(batch)
        db.commit()
        db.refresh(batch)
        return batch

    def read(self, db: Session, skip: int = 0, limit: int = 100) -> schema.BatchSchema:
        return db.query(Batch).offset(skip).limit(limit).all()
       
    def delete(self, db: Session, id: int) -> schema.BatchSchema:
        batch = db.query(Batch).filter(Batch.id == id).first()
        db.delete(batch)
        db.commit()
        return batch

batch = BatchCrud()
