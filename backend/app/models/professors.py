from sqlalchemy import Column, Integer, String, Boolean
from db import Base


class Professors(Base):
    __tablename__ = "Professors"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, index=True, nullable=False)
    password = Column(String, index=True, nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)

    def __repr__(self) -> str:
        return f"{self.id} <{self.name}, {self.email}>"
