from sqlalchemy.orm import Session
from typing import List
from models.subject import Subject
from schemas.subject import SubjectCreateSchema, SubjectSchema


class SubjectCrud:
    def create(self, db: Session, new_subject: SubjectCreateSchema) -> SubjectSchema:
       subject = Subject(name=new_subject.name, display_name=new_subject.display_name, bg_image_url=new_subject.bg_image_url) 
       db.add(subject)
       db.commit()
       db.refresh(subject)
       return subject

    def read(self, db: Session, skip: int = 0, limit: int = 100) -> List[SubjectSchema]:
        return db.query(Subject).offset(skip).limit(limit).all()

    def delete(self, db: Session, id: int) -> SubjectSchema:
        subject = db.query(Subject).filter(Subject.id == id).first()
        db.delete(subject)
        db.commit()
        return subject

subject = SubjectCrud()
