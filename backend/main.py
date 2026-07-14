# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import mysql.connector

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# conn = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="you_naughty_naughty",
#     database="erp"
# )

# cursor = conn.cursor()

# class Login(BaseModel):
#     email: str
#     password: str

# @app.post("/login")
# def login(user: Login):

#     cursor.execute(
#         "SELECT id, role FROM login_data WHERE email=%s AND password=%s",
#         (user.email, user.password)
#     )

#     result = cursor.fetchone()

#     if result:
#         return {
#             "success": True,
#             "message": "Login Successful",
#             "id": result[0],
#             "role": result[1]
#         }

#     return {
#         "success": False,
#         "message": "Invalid Email or Password"
#     }

# @app.get("/subject")
# def get_subject():
#     cursor.execute("SELECT sub_name FROM attendance")
#     subject = cursor.fetchall()
#     return subject

# @app.get("/sub_code")
# def sub_code():
#     cursor.execute("SELECT sub_code FROM attendance")
#     code = cursor.fetchall()
#     return code


# @app.get("/")
# def home():
#     return{
#         "message":"HELLO"
#     }


# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import mysql.connector
# from fastapi import FastAPI
# from routers import auth




# app = FastAPI()
# app.include_router(auth.router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # allow React dev server
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class Login(BaseModel):
#     email: str
#     password: str

# def get_db_cursor():
#     conn = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="you_naughty_naughty",
#     database="erp"
#     )
#     return conn, conn.cursor()

# @app.post("/login")
# def login(user: Login):
#     conn, cursor = get_db_cursor()
#     cursor.execute(
#         "SELECT id, role, enrolment_no FROM login_data WHERE email=%s AND password=%s",
#         (user.email, user.password)
#     )
#     result = cursor.fetchone()
#     conn.close()

#     if result:
#         enrolment_no = result[2]
#         return {
#             "success": True,
#             "message": "Login Successful",
#             "id": result[0],
#             "role": result[1],
#             "enrolment_no": result[2]
#         }
#     return {"success": False, "message": "Invalid Email or Password"}

# @app.get("/subject")
# def get_subject():
#     conn, cursor = get_db_cursor()
#     cursor.execute("SELECT sub_name FROM attendance")
#     subject = cursor.fetchall()
#     conn.close()
#     return subject

# @app.get("/sub_code")
# def sub_code():
#     conn, cursor = get_db_cursor()
#     cursor.execute("SELECT sub_code FROM attendance")
#     code = cursor.fetchall()
#     conn.close()
#     return code

# @app.get("/total_lectures")
# def total_att():
#     conn, cursor = get_db_cursor()
#     cursor.execute ( "SELECT total_lectures FROM attendance")
#     total = cursor.fetchall()
#     conn.close()
#     return total

# @app.get("/attended_lec")
# def attended_lec():
#     conn, cursor = get_db_cursor()
#     cursor.execute ( "SELECT classes_attended FROM attendance")
#     attended = cursor.fetchall()
#     conn.close()
#     return attended

# @app.get("/")
# def home():
#     return {"message": "main"}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth
from routers import student

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(student.router)


@app.get("/")
def home():
    return {"message": "ERP Backend Running"}