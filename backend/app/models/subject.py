from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.db import Base


class Subject(Base):
    __tablename__ = "subjects"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True, nullable=False)
    display_name = Column(String, nullable=False)
    timetable = relationship("Timetable", back_populates="subject")

    def __repr__(self) -> str:
        return f"{self.id} <{self.name}>"
