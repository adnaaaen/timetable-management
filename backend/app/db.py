from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import create_engine

# from dotenv import load_dotenv
# import os

# load_dotenv()
# POSTGRES_USER = os.getenv("POSTGRES_USER")
# POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
# POSTGRES_DB = os.getenv("POSTGRES_DB")
# PSQL_DB_URL = f"psql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@localhost:5432/{POSTGRES_DB}"

# engine = create_engine(PSQL_DB_URL)
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
