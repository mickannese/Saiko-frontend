import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="log-form">
      <h2>Login to your account</h2>
      <form>
        <input type="text" title="username" placeholder="username" />
        <input type="password" title="username" placeholder="password" />
        <button type="submit" class="btn">Login</button>
      </form>
      <Link to="/login">
      </Link>
    </div>
  );
};

export default Login;