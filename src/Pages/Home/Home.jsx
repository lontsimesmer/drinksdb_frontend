import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function HomePage() {
  return (
    <div className="HomePage">
      <section className="NavBar">
        <div className="attributes">
          <div className="Left">
            <Link href="/">Welcome</Link>
          </div>
          <div className="Right">
            <span className="login">
              <a href="/login">Login</a>
            </span>
            <span className="signup">
              <a href="/register">Sign Up</a>
            </span>
          </div>
        </div>
      </section>
      <section className="Display">
        <div className="SideBar">
          <h1>Categories</h1>
          <span className="Container">
            <div className="checkbox">
              <input type="checkbox" />
              Water
            </div>
          </span>
          <h1>Drinks</h1>
          <h1>Glasses</h1>
        </div>
        <div className="Cards">
          <div>
            <h1>Ingredients</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
