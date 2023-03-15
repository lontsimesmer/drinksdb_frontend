import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';
import './Register.css';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    await register(values);
    setIsLoading(true);
    navigate('/login');
  };
  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <h1>Create your account here !</h1>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <input type="text" placeholder="First Name" name="firstName" />
        <input type="text" placeholder="Last Name" name="lastName" />
        <input type="email" placeholder="Email Address" name="emailAddress" />
        <input type="number" placeholder="Phone Number" name="phone" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirmation"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
