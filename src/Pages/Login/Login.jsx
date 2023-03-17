import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';
import './Login.css';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const element = new FormData(event.currentTarget);
    const user = Object.fromEntries(element.entries());

    setIsLoading(true);
    setError('');
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate('/dashboard');
    } catch (e) {
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <h1>Login to your account here please!</h1>
        <input type="email" placeholder="Email Address" name="emailAddress" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
        <p>
          Need an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
