from fastapi import APIRouter
from api.routes.professor import router as p_router
from api.routes.subject import router as s_router
from api.routes.batch import router as b_router
from api.routes.timetable import router as t_router
from api.routes.user import router as u_router

router = APIRouter()

router.include_router(p_router)
router.include_router(s_router)
router.include_router(b_router)
router.include_router(t_router)
router.include_router(u_router)
