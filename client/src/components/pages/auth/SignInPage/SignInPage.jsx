import { React, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import googleButton from '../../../../assets/gg.png';
import './SignIn.css';

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
const SignInPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function goToSignUp() {
    window.location.assign('SignUpPage.jsx');
  }

  return (
    <div className='signin-container'>
      <h1 className='orange-gradient'>Sign In</h1>
      <div className='google-btn' onClick={goToSignUp} style={{ margin: '30px'}}>
        <img src={googleButton} />
      </div>
      <div>
        <p>or</p>
      </div>
      <form>
        <Typography variant='h6'>Username or Email</Typography>
        <input
          type='text'
          id='usernameEmail'
          name='usernameEmail'
          placeholder='bunnylove or example@test.com'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <div className='password-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            placeholder='Password'
            required=''
          />
          <i type='button' id='fa-eye' onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </i>
        </div>
        <button type='submit' onClick={() => navigate('/dashboard')}>Submit</button>

        <div className='signup-link'>
          <p> Do not have an account?</p>
          <p type='button' id='signup' onClick={() => navigate('/signup')}>
            Sign up
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
