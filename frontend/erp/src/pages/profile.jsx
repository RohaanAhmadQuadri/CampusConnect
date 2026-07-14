import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../resources/profile.jpg";
import logo from "../resources/logo.png";
import "../styles/profile.css";

function Profile() {
    
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <div className="nav-left">

                    <button
                        className="logo-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <img
                            src={logo}
                            alt="Campus Connect"
                            className="logo"
                        />
                    </button>

                    <h2>Campus Connect</h2>
                </div>

                <div className="nav-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-bar"
                    />
                </div>

                <div className="nav-right">
                    <button className="nav-btn">Notifications</button>
                    <button className="nav-btn">Settings</button>

                    <div className="user-info">
                        <img src={profile} alt="Profile" />
                        <span>Rohaan</span>
                    </div>
                </div>
            </nav>

            {sidebarOpen && (
                <div
                className="overlay" onClick={() => setSidebarOpen(false)}
                ></div>
)}
            <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>

                <div className="sidebar-title">
                    Menu
                </div>

                <ul className="sidebar-menu">
                    <div className="box attendance">
                        <button onClick={() => navigate("/attendance")}>Attendance</button>
                    </div>
                    <li>🏠 Dashboard</li>
                    <li>👤 Profile</li>
                    <li>📚 Subjects</li>
                    <li>📅 Timetable</li>
                    <div className="box home">
                        <button onClick={() => navigate("/home")}>Home</button>
                    </div>
                    <li>📝 Assignments</li>
                    <li>🎓 Results</li>
                    <li>💳 Fees</li>
                    <li>⚙️ Settings</li>
                    <li>🚪 Logout</li>
                </ul>

            </aside>

            <div className={sidebarOpen ? "main-body content shift" : "main-body content"}>

                <div className="mini-intro">
                    <div className="profile-img">
                        <img src={profile} alt="Sample" />
                    </div>

                    <div className="name">
                        Rohaan Ahmad Quadri
                    </div>

                    <div className="email-address">
                        25-cse-044rohaan@eitfaridabad.co.in
                    </div>
                </div>

                <div className="detail">

                    <div className="detail-card">
                        <h2>🎓 Academic Details</h2>

                        <div className="detail-row">
                            <span>Student ID</span>
                            <p>25-CSE-044</p>
                        </div>

                        <div className="detail-row">
                            <span>Email</span>
                            <p>25-cse-044rohaan@eitfaridabad.co.in</p>
                        </div>

                        <div className="detail-row">
                            <span>Roll No</span>
                            <p>25-CSE-044</p>
                        </div>

                        <div className="detail-row">
                            <span>Enrollment No</span>
                            <p>2026001</p>
                        </div>

                        <div className="detail-row">
                            <span>Admission Year</span>
                            <p>2025</p>
                        </div>

                        <div className="detail-row">
                            <span>Admission Date</span>
                            <p>21/08/2025</p>
                        </div>

                        <div className="detail-row">
                            <span>Mode Of Admission</span>
                            <p>Direct</p>
                        </div>
                    </div>

                    <div className="detail-card">
                        <h2>📝 Course Details</h2>

                        <div className="detail-row">
                            <span>Session</span>
                            <p>2025-2026</p>
                        </div>

                        <div className="detail-row">
                            <span>Course</span>
                            <p>Bachelor of Technology (B.Tech)</p>
                        </div>

                        <div className="detail-row">
                            <span>Branch</span>
                            <p>B.Tech-First-Year (B.Tech(FYR))</p>
                        </div>

                        <div className="detail-row">
                            <span>Year</span>
                            <p>1</p>
                        </div>

                        <div className="detail-row">
                            <span>Semester</span>
                            <p>2</p>
                        </div>

                        <div className="detail-row">
                            <span>Section</span>
                            <p>A</p>
                        </div>

                        <div className="detail-row">
                            <span>Group</span>
                            <p>G2</p>
                        </div>
                    </div>

                    <div className="detail-card">
                        <h2>👤 Personal Details</h2>

                        <div className="detail-row">
                            <span>Category</span>
                            <p>General</p>
                        </div>

                        <div className="detail-row">
                            <span>Gender</span>
                            <p>M</p>
                        </div>

                        <div className="detail-row">
                            <span>D.O.B</span>
                            <p>04/02/2007</p>
                        </div>

                        <div className="detail-row">
                            <span>Religion</span>
                            <p>Muslim</p>
                        </div>

                        <div className="detail-row">
                            <span>Mobile No</span>
                            <p>9990291283</p>
                        </div>

                        <div className="detail-row">
                            <span>Aadhaar Card No</span>
                            <p>NA</p>
                        </div>

                        <div className="detail-row">
                            <span>Pan Card No</span>
                            <p>NA</p>
                        </div>

                        <div className="detail-row">
                            <span>Personal Email</span>
                            <p>NA</p>
                        </div>

                        <div className="detail-row">
                            <span>Mark Of Identification</span>
                            <p>NA</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;