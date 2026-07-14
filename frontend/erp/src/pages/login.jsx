import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const response = await fetch("http://127.0.0.1:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            console.log("Login Response:", data);

            if (data.success) {

                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("token_type", data.token_type);
                localStorage.setItem("role", data.role);
                localStorage.setItem("enrolment_no", data.enrolment_no);

                navigate("/home");

            } else {

                alert("Wrong Email or Password");

            }

        } catch (err) {

            console.error(err);

        }

    }

    return (
        <div>
            <div className="outer-box">

                <p>LOG-IN</p>

                <div className="email-box">

                    <label className="label">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div id="password-box">

                    <label className="label">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>
        </div>
    );
}

export default Login;