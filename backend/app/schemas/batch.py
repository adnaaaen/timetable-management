from pydantic import BaseModel
from datetime import date


class BatchCreateSchema(BaseModel):
    name: str
    display_name: str
    start_year: date
    end_year: date


class BatchSchema(BatchCreateSchema):
    id: int

    class config:
        orm_mode = True
