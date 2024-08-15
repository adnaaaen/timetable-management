from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from api.api import router
from db import Base, engine

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
