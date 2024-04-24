"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  const logoutHandler = async () => {
    debugger;
    signOut();
  };
  return (
    <li>
      <button onClick={logoutHandler}>Logout</button>
    </li>
  );
};

export default Logout;
