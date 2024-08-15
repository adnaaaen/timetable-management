from sqlalchemy import Column, Integer, String
from db import Base


class Subject(Base):
    __tablename__ = "Subjects"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True, nullable=False)
    display_name = Column(String, nullable=False)
    bg_image_url = Column(String, nullable=False)

    def __repr__(self) -> str:
        return f"{self.id} <{self.name}>"
