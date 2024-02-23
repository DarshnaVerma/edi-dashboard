import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Login = ({ isAuthenticated, login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      login();
    } else {
      setError('Invalid username or password');
      setErrorType(username === 'admin' ? 'password' : 'username');
    }
  };
  
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={errorType === 'username'}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errorType === 'password'}
          />
        </div>
        {error && <div className='error'>{error}</div>}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

// Define propTypes for Login component
Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // isAuthenticated prop should be a boolean and is required
  login: PropTypes.func.isRequired, // login prop should be a function and is required
};


export default Login;
