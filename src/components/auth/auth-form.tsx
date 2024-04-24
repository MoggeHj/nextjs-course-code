"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { getSession, signIn } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";

import classes from "./auth-form.module.css";
import registerUser from "@root/lib/signin-action";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const [RegisterUserState, registerUserAction] = useFormState(registerUser, {
    message: null,
  });

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        redirect("/community");
      }
    });
  }, [router]);

  const LoginHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;
    try {
      const result = await signIn("credentials", {
        email: enteredEmail,
        password: enteredPassword,
        redirect: false,
      });
      if (result.ok) {
        router.push("/community");
        router.refresh();
      }
      console.log("result:", { result });
      debugger;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  console.log(RegisterUserState.message);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form
        {...(isLogin
          ? { onSubmit: LoginHandler }
          : { action: registerUserAction })}
      >
        <p className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </p>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
          {isLogin ? (
            <p>{"Some login message"}</p>
          ) : (
            RegisterUserState.message && <p>{RegisterUserState.message}</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
