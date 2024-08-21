from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import create_engine


SQLITE_URL = "sqlite:///database.db"
engine = create_engine(SQLITE_URL)

SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
