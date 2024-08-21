from pydantic import BaseModel, EmailStr


class ProfessorCreateSChema(BaseModel):
    name: str
    email: EmailStr
    password: str


class ProfessorSchema(BaseModel):
    id: int
    name: str
    email: EmailStr
    is_active: bool

    class config:
        orm_mode = True
