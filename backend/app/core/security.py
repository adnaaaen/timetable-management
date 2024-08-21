from passlib.context import CryptContext

pass_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_hashed_password(password: str) -> str:
    return pass_context.hash(password)


def verify_password(hashed_password: str, password: str) -> bool:
    return pass_context.verify(password, hashed_password)
