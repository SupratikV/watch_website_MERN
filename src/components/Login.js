import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/", {
                email,
                password,
            });

            if (response.data === "exist") {
                

                // Redirect to home and pass the username as an ID
                history("../pages/Collections");
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    }

    return (
        <div className="login">
            <h1>Sign In</h1>
            <form action="POST">
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input type="submit" onClick={submit} />
            </form>
            
            <p>Don't have an account?<Link to="/Register">Create Account</Link> </p>
            
            
        </div>
    );
}

export default Login;