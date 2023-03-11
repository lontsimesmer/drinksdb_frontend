import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <form>
      <h1>Login to your account here please!</h1>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Login</button>
      <p>
        Need an account? <Link to="/register">Register here</Link>
      </p>
    </form>
  );
}
