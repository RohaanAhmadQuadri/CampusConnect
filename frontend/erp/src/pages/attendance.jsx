import { useState, useEffect } from "react";
import "../styles/attendance.css";

function Attendance() {

    const [subject, setSubject] = useState([]);
    const [sub_code, setCode] = useState([]);
    const [total_lec, setTotalLec] = useState([]);
    const [attended_lec, setAttendedLec] = useState([]);

    const token = localStorage.getItem("access_token");

    const headers = {
        Authorization: `Bearer ${token}`, // WILL create an ERROR 401 is the token is not right
    };

    // SUBJECT
    useEffect(() => {
        fetch("http://127.0.0.1:8000/student/subject", {
            headers,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Subject:", data);
                setSubject(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.error(err));
    }, []);

    // SUBJECT CODE
    useEffect(() => {
        fetch("http://127.0.0.1:8000/student/sub_code", {
            headers,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Code:", data);
                setCode(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.error(err));
    }, []);

    // TOTAL LECTURES
    useEffect(() => {
        fetch("http://127.0.0.1:8000/student/total_lectures", {
            headers,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Total:", data);
                setTotalLec(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.error(err));
    }, []);

    // ATTENDED LECTURES
    useEffect(() => {
        fetch("http://127.0.0.1:8000/student/attended_lec", {
            headers,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Attended:", data);
                setAttendedLec(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.error(err));
    }, []);

    const totalLecturesSum = total_lec.reduce(
        (sum, item) => sum + Number(item[0]),
        0
    );

    const attendedLecturesSum = attended_lec.reduce(
        (sum, item) => sum + Number(item[0]),
        0
    );

    const attendancePercentage =
        totalLecturesSum > 0
            ? ((attendedLecturesSum / totalLecturesSum) * 100).toFixed(2)
            : 0;

    return (
        <div>

            <div className="total-box">

                <label>Total Summary</label>

                <div className="total-sub">
                    <label className="total-title-box">No of Subjects</label>
                    <p>{subject.length}</p>
                </div>

                <div className="total-lec">
                    <label className="total-title-box">Total Lectures</label>
                    <p>{totalLecturesSum}</p>
                </div>

                <div className="total-attended">
                    <label className="total-title-box">Attended Lectures</label>
                    <p>{attendedLecturesSum}</p>
                </div>

                <div className="total-per-attendence">
                    <p>Attendance : {attendancePercentage}%</p>
                </div>

            </div>

            <div className="outer-attendace-box">

                <div className="grid subject-name">
                    <label className="name-head">Subjects</label>
                    {subject.map((item, index) => (
                        <p key={index}>{item[0]}</p>
                    ))}
                </div>

                <div className="grid subject-code">
                    <label className="name-head">Subject Code</label>
                    {sub_code.map((item, index) => (
                        <p key={index}>{item[0]}</p>
                    ))}
                </div>

                <div className="grid total-classes">
                    <label className="name-head">Total Lectures</label>
                    {total_lec.map((item, index) => (
                        <p key={index}>{item[0]}</p>
                    ))}
                </div>

                <div className="grid classes-attended">
                    <label className="name-head">Attended Lectures</label>
                    {attended_lec.map((item, index) => (
                        <p key={index}>{item[0]}</p>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default Attendance;