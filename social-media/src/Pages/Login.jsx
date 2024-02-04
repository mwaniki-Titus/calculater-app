import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { handleSubmit, register } = useForm();

  const SubmitFunction = (data) => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userData'));
    if (
      storedUserDetails &&
      storedUserDetails.username === data.username &&
      storedUserDetails.password === data.password
    ) {
     
      navigate('/main');
    } else {
      
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <span>Don't have an account?</span>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit(SubmitFunction)}>
            <input type="text" placeholder="Username" {...register('username')} />
            <input type="password" placeholder="Password" {...register('password')} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
