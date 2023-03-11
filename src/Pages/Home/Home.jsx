import react from 'react';
import Style from 'Home.module.css';

export default function HomePage() {
  return (
    <div className={Style.Home_page}>
      <div className={Style.Nav_bar}>
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </nav>
      </div>
    </div>
  );
}
