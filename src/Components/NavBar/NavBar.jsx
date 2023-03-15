import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={Styles.NavBar}>
      {/* <div className={Style.NavBar__logo}></div> */}
      <div className={Styles.NavBar__attributes}>
        <div className={Styles.Left}>
          <Link href="/">Welcome</Link>
        </div>
        <div className={Styles.Right}>
          <span className={Styles.login}>
            <a href="/login">Login</a>
          </span>
          <span className={Styles.signup}>
            <a href="/register">Sign Up</a>
          </span>
        </div>
      </div>
    </div>
  );
}
