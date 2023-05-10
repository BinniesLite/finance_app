import { React, useState } from "react"
import { FaEye, FaEyeSlash } from "../react-icons/fa"
import "../../styles/SignIn.css"
import SignUpPage from "./SignUpPage";

const SignInPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    function goToSignUp() {
        window.location.assign("SignUpPage.jsx");
    }
    
    return (
        <>
        <header>Sign in</header>
        <body>
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
                <div class = "password-container">
                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" required=""/>
                    <i type="button" id = "fa-eye" onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</i>
                </div>
                <button type="submit">Submit</button>

                <div class = "signup-link">
                    <p> Do not have an account?</p>
                    <p a href = "SignUpPage.jsx" type = "button" id = "signup">Sign up</p>
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