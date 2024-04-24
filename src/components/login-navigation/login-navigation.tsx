import Link from "next/link";
import { getServerSession } from "next-auth";

import classes from "./login-navigation.module.css";
import Logout from "../logout/logout";

const LoginNavigation = async () => {
  const session = await getServerSession();
  console.log("Session:", { session });
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!session && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {session && <Logout></Logout>}
        </ul>
      </nav>
    </header>
  );
};

export default LoginNavigation;
