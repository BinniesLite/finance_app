import { React, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import Typography from "@mui/material/Typography";

const SignInPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function goToSignUp() {
    window.location.assign("SignUpPage.jsx");
  }

  return (
      <div className="signin-container">
        <h1 className="orange-gradient">
          Sign In
        </h1>
        <form>
          <Typography variant="h6">Username or Email</Typography>
          <input
            type="text"
            id="usernameEmail"
            name="usernameEmail"
            placeholder="bunnylove or example@test.com"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Typography variant="h6">Password</Typography>
          <div class="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <i type="button" id="fa-eye" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </i>
          </div>
          <button type="submit">Submit</button>

          <div class="signup-link">
            <p> Do not have an account?</p>
            <p type="button" id="signup" onClick={() => navigate("/signup")}>
              Sign up
            </p>
          </div>
        </form>
      </div>
    
  );
};



export default SignInPage;
