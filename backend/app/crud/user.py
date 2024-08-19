from app.schemas.user import UserLogin
from sqlalchemy.orm import Session
from app.models.professors import Professors
from app.core import security


class UserCrud:
    def login(self, user: UserLogin, db: Session) -> bool:
        logged_user = (
            db.query(Professors).filter(Professors.email == user.email).first()
        )
        if not logged_user:
            return False
        is_password_match = security.verify_password(
            logged_user.password, user.password
        )
        if not is_password_match:
            return False
        return logged_user


user = UserCrud()
