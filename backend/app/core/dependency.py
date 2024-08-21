from sqlalchemy.orm import Session
from typing import Any


def get_that_by_this(key: Any, value: Any, db: Session, model: Any):
    return db.query(model).filter(getattr(model, key) == value).first()
