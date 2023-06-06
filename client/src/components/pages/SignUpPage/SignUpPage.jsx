import { React, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='signup-container'>
        <header id='sign-up-header'>Sign up</header>
        <form>
          <label htmlFor='username'>Username or Email</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='bunnylover'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label for='email'>Email</label>
          <input
            value={email}
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
          />

          <label for='fname'>Full name</label>
          <input
            value={fullName}
            type='text'
            id='fname'
            name='fname'
            placeholder='Full name'
            required
          />

          <label for='password'>Password</label>
          <div class='password-container'>
            <input
              value={password}
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

          <button type='submit'>Sign Up</button>
          <div class='signin-link'>
            <p> Do not have an account?</p>
            <Link to='/'>
              <i type='button' id='signup'>
                Log in
              </i>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
