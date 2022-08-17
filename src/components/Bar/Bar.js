import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styles from "./Bar.module.scss";

export function Bar() {
  return (
    <>
      <nav className={styles.navBar}>
        <h3>
          <Link to="/">Messenger</Link>
        </h3>
        <div className={styles.navList}>
          <Link to="/chat">Chat</Link>
        </div>
        <div className={styles.navList}>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
