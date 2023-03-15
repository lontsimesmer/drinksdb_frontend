import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function LoginPage() {
  return (
    <div className="Container">
      <form>
        <h1>Login to your account here please!</h1>
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
        <p>
          Need an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
