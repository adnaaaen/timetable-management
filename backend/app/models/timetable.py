from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db import Base


class Timetable(Base):
    __tablename__ = "timetable"
    id = Column(Integer, primary_key=True, autoincrement=True)
    subject_id = Column(Integer, ForeignKey("subjects.id"), nullable=False)
    professor_id = Column(Integer, ForeignKey("professors.id"), nullable=False)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=False)
    time = Column(String, nullable=False)

    professor = relationship("Professors", back_populates="timetable")
    batch = relationship("Batch", back_populates="timetable")
    subject = relationship("Subject", back_populates="timetable")

    def __repr__(self) -> str:
        return f"{self.id} <{self.subject}, {self.professor}>"
