import React, { useState } from "react";
import { useSignup } from "../../../../hooks/useSignup";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const { signup, error, isLoading } = useSignup();

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const submitSignin = () => {};

  const submitSignup = async (e) => {
    e.preventDefault();

    await signup(email, name, password);
  };

  return (
    <div
      id={styles.homepage}
      className={`${styles.container} ${
        isSignUpActive ? styles["right-panel-active"] : ""
      }`}
    >
      <div
        className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
      >
        <form className={styles.form} action="#">
          <h1 className={styles.h1}>Create Account</h1>
          <div className={styles["social-container"]}>
            <a href="#" className={styles.social}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className={styles.span}>
            or use your email for registration
          </span>
          <input type="text" placeholder="Name" className={styles.input} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="Email" className={styles.input} onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} onClick={submitSignup}>Sign Up</button>
        </form>
      </div>
      <div
        className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
      >
        <form className={styles.form} action="#">
          <h1 className={styles.h1}>Sign in</h1>
          <div className={styles["social-container"]}>
            <a href="#" className={styles.social}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className={styles.span}>or use your account</span>
          <input type="email" placeholder="Email" className={styles.input} onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">Forgot your password?</a>
          <button className={styles.button} onClick={submitSignin}>Sign In</button>
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
      <div className={styles["overlay-container"]}>
        <div className={styles.overlay}>
          <div
            className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
          >
            <h1 className={styles.h1}>Welcome Back!</h1>
            <p className={styles.p}>
              To keep connected with us please login with your personal info
            </p>
            <button disabled={isLoading} className={styles.button} onClick={handleSignInClick}>
              Sign In
            </button>
            {error && <div className={styles.error}>{error}</div>}
          </div>
          <div
            className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
          >
            <h1 className={styles.h1}>Hello, Friend!</h1>
            <p className={styles.p}>
              Enter your personal details and start the journey with us
            </p>
            <button className={styles.button} onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
