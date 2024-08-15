from sqlalchemy.orm import Session
from typing import List
from models.professors import Professors
from schemas.professor import ProfessorCreateSChema, ProfessorSchema


class ProfessorCrud:
    def create(self, db: Session, new_professor: ProfessorCreateSChema) -> ProfessorSchema:
        new_user = Professors(
            name=new_professor.name,
            email=new_professor.email,
            password=new_professor.password,
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user

    def read(self, db: Session, skip: int = 0, limit: int = 100) -> List[ProfessorSchema] | None:
        return db.query(Professors).offset(skip).limit(limit).all()

    def delete(self, db: Session, id: int) -> ProfessorSchema:
        user = db.query(Professors).filter(Professors.id == id).first()
        db.delete(user)
        db.commit()
        return user


professor = ProfessorCrud()
