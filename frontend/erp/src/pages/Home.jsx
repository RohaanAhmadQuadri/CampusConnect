import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="outer-box">
                <div className="box attendance">
                    <button onClick={() => navigate("/attendance")}>Attendance</button>
                </div>
                <div className="box result">
                    <button onClick={() => navigate("/")}>Result</button></div>
                <div className="assignment">
                    <button onClick={() => navigate("/")}>Assignment</button></div>
                <div className="profile">
                    <button onClick={() => navigate("/profile")}>Profile</button></div>

            </div>
            <button
                onClick={() => navigate("/")}
                className="home-btn"
            >
                Click Me
            </button>
        </div>
    );
}

export default Home;