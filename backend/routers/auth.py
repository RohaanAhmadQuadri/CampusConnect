from fastapi import APIRouter
from pydantic import BaseModel
import mysql.connector
from jose import jwt
from datetime import datetime, timezone

from security import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


class Login(BaseModel):
    email: str
    password: str


def get_db_cursor():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="you_naughty_naughty",
        database="erp"
    )
    return conn, conn.cursor()


@router.post("/login")
def login(user: Login):

    conn, cursor = get_db_cursor()

    cursor.execute(
        "SELECT id, role, enrolment_no FROM login_data WHERE email=%s AND password=%s",
        (user.email, user.password)
    )

    result = cursor.fetchone()

    conn.close()

    if result:
        token = create_access_token({
            "enrolment_no" : result[2] , 
            "role" : result[1]
        })

        print("Generated Token:", token)
        print("Claims:", jwt.get_unverified_claims(token))
        print("Current UTC:", datetime.now(timezone.utc))
        
        return {
            "success": True,
            "message": "Login Successful",
            "id": result[0],
            "role": result[1],
            "enrolment_no": result[2],
            "access_token" : token ,
            "token_type" : "Bearer"
        }

    return {
        "success": False,
        "message": "Invalid Email or Password"
    }