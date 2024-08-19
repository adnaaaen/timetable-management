from sqlalchemy.orm import Session
from typing import List
from models.timetable import Timetable
from schemas.timetable import (
    TimetableCreateSchema,
    TimetableSchema,
    TimetableDeleteSchema,
)


class TimetableCrud:
    def create(
        self, db: Session, new_timetable: TimetableCreateSchema
    ) -> TimetableSchema:
        timetable = Timetable(
            subject_id=new_timetable.subject_id,
            professor_id=new_timetable.professor_id,
            batch_id=new_timetable.batch_id,
            time=new_timetable.time,
        )
        db.add(timetable)
        db.commit()
        db.refresh(timetable)
        return timetable

    def read(
        self, db: Session, skip: int = 0, limit: int = 100
    ) -> List[TimetableSchema]:
        db_timetable = (
            db.query(Timetable)
            .join(Timetable.subject)
            .join(Timetable.professor)
            .join(Timetable.batch)
            .offset(skip)
            .limit(limit)
            .all()
        )
        return db_timetable

    def delete(self, db: Session, id: int) -> TimetableDeleteSchema:
        timetable = db.query(Timetable).filter(Timetable.id == id).first()
        db.delete(timetable)
        db.commit()
        return timetable

    def by_id(self, db: Session, id: int) -> List[TimetableSchema]:
        timetables_by_id = (
            db.query(Timetable)
            .join(Timetable.professor)
            .join(Timetable.batch)
            .join(Timetable.subject)
            .filter(Timetable.professor_id == id)
            .all()
        )
        return timetables_by_id


timetable = TimetableCrud()
