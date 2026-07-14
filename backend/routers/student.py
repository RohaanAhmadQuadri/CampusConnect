from fastapi import APIRouter, Depends
import mysql.connector

from security import get_current_user

router = APIRouter(
    prefix="/student",
    tags=["Student"]
)


def get_db_cursor():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="you_naughty_naughty",
        database="erp"
    )
    return conn, conn.cursor()


@router.get("/subject")
def get_subject(current_user=Depends(get_current_user)):

    enrolment = current_user["enrolment_no"]

    conn, cursor = get_db_cursor()

    cursor.execute(
        "SELECT sub_name FROM attendance WHERE enrolment_no=%s",
        (enrolment,)
    )

    subject = cursor.fetchall()

    conn.close()

    return subject


@router.get("/sub_code")
def sub_code(current_user=Depends(get_current_user)):

    enrolment = current_user["enrolment_no"]

    conn, cursor = get_db_cursor()

    cursor.execute(
        "SELECT sub_code FROM attendance WHERE enrolment_no=%s",
        (enrolment,)
    )

    code = cursor.fetchall()

    conn.close()

    return code


@router.get("/total_lectures")
def total_lectures(current_user=Depends(get_current_user)):

    enrolment = current_user["enrolment_no"]

    conn, cursor = get_db_cursor()

    cursor.execute(
        "SELECT total_lectures FROM attendance WHERE enrolment_no=%s",
        (enrolment,)
    )

    total = cursor.fetchall()

    conn.close()

    return total


@router.get("/attended_lec")
def attended_lectures(current_user=Depends(get_current_user)):

    enrolment = current_user["enrolment_no"]

    conn, cursor = get_db_cursor()

    cursor.execute(
        "SELECT classes_attended FROM attendance WHERE enrolment_no=%s",
        (enrolment,)
    )

    attended = cursor.fetchall()

    conn.close()

    return attended



