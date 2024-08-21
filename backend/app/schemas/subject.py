from pydantic import BaseModel


class SubjectCreateSchema(BaseModel):
    name: str
    display_name: str


class SubjectSchema(SubjectCreateSchema):
    id: int

    class config:
        orm_mode = True
