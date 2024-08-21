from fastapi import APIRouter
from .api.professor import router as p_router
from .api.subject import router as s_router
from .api.batch import router as b_router
from .api.timetable import router as t_router
from .api.user import router as u_router

router = APIRouter()

router.include_router(p_router)
router.include_router(s_router)
router.include_router(b_router)
router.include_router(t_router)
router.include_router(u_router)
