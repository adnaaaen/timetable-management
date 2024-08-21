from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from app.db import Base


class Professors(Base):
    __tablename__ = "professors"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, index=True, nullable=False)
    password = Column(String, index=True, nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    timetable = relationship("Timetable", back_populates="professor")

    def __repr__(self) -> str:
        return f"{self.id} <{self.name}, {self.email}>"
