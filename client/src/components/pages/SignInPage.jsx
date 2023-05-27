import { React, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import {useNavigate} from "react-router-dom"
import "../../styles/SignIn.css"

const SignInPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    
    return (
        <>
        <header className="signin">Sign in</header>
        <body className="signin">
            <form>
                <label htmlFor="username">Username or Email</label>
                <input
                    type="text"
                    id="usernameEmail"
                    name="usernameEmail"
                    placeholder="bunnylove or example@test.com"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <label for="password">Password</label>
                <div className = "password-container">
                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" required=""/>
                    <i type="button" id = "fa-eye" onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</i>
                </div>
                <button type="submit">Submit</button>

                <div className = "signup-link">
                    <p> Do not have an account?</p>
                    <p type = "button" id = "signup" onClick={() => navigate("/transactions")}>Sign up</p>
                </div>
            </form>
        </body>
        </>
    );
};

const onClick = () => {
    return null;
}

export default SignInPage