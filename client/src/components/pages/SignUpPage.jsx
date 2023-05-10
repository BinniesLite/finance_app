import { React, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"


const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    
    return (
    <>
    <header>Sign up</header>
    <body>
        <form>
            <label htmlFor="username">Username</label><br />
            <input
                type="text"
                id="username"
                name="username"
                placeholder="bunnylover"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br/>

            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email" placeholder="email" required/><br/>
            <label for="fname">Full name</label><br/>
            <input type="text" id="fname" name="fname" placeholder="Full name" required/><br/>
            <label for="password">Password</label><br/>
            <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" required=""/><br/>
            <i type="button" onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</i><br/>
            <button type="submit">Submit</button>
        </form>
    </body>
    </>
    );
};

const onClick = () => {
    return null;
}

export default SignUpPage