from pydantic import BaseModel


class SubjectCreateSchema(BaseModel):
    name: str
    display_name: str
    bg_image_url: str


class SubjectSchema(SubjectCreateSchema):
    id: int

    class config:
        orm_mode = True
