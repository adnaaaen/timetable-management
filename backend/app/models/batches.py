from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import relationship
from app.db import Base


class Batch(Base):
    __tablename__ = "batches"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    display_name = Column(String, nullable=False, index=True)
    start_year = Column(Date, nullable=False)
    end_year = Column(Date, nullable=False)
    timetable = relationship("Timetable", back_populates="batch")

    def __repr__(self) -> str:
        return f"{self.id} <{self.name}, {self.display_name}>"
