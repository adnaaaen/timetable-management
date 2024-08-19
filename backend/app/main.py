from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from app.routes.config import router
from app.models.batches import Batch
from app.models.professors import Professors
from app.models.subject import Subject
from app.models.timetable import Timetable
from app.db import Base, engine

app = FastAPI()
app.include_router(router)
Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
