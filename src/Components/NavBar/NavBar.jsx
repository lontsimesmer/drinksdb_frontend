import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <section className={Styles.NavBar}>
      {/* <div className={Style.NavBar__logo}></div> */}
      <div className={Styles.NavBar__attributes}>
        <div className={Styles.Left}>
          <Link href="/">Welcome</Link>
        </div>
        <div className={Styles.Right}>
          <span>
            <a href="/login">Login</a>
          </span>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </section>
  );
}
