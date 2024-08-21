from pydantic import BaseModel


class TimetableCreateSchema(BaseModel):
    subject_id: int
    professor_id: int
    batch_id: int
    time: str


class TimetableDeleteSchema(TimetableCreateSchema):
    id: int

    class Config:
        orm_mode = True


class SubjectSchema(BaseModel):
    id: int
    display_name: str

    class Config:
        orm_mode = True


class BatchSchema(BaseModel):
    id: int
    display_name: str

    class Config:
        orm_mode = True


class ProfessorSchema(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class TimetableSchema(BaseModel):
    id: int
    subject: SubjectSchema
    professor: ProfessorSchema
    batch: BatchSchema
    time: str

    class Config:
        orm_mode = True
