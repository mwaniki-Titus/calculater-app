import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async () => {
    try {
      
      console.log('Logging in with email:', email, 'and password:', password);
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleRegister = async () => {
    try {
      console.log('Registering with email:', email, 'and password:', password);

      alert('Registration successful!');
     
      setIsRegistering(false);
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={isRegistering ? handleRegister : handleLogin}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <p onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
      </p>
    </div>
  );
};

export default LoginForm;
