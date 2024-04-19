import Link from "next/link";

import classes from "./login-navigation.module.css";

const LoginNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/community/auth">Login</Link>
          </li>
          <li>
            <Link href="/community/profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LoginNavigation;
