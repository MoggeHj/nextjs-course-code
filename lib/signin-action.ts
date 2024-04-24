"use server";

import connectToDatanbase from "@root/lib/db";
import { hashPassword, comparePassword } from "@root/lib/auth";
import { signIn } from "next-auth/react";

const registerUser = async (prevState, formData) => {
  const enteredEmail = formData.get("email");
  const enteredPassword = formData.get("password");

  if (
    !enteredEmail ||
    !enteredEmail.includes("@") ||
    !enteredPassword ||
    enteredEmail.trim().length < 4
  ) {
    return {
      message: "Invalid input- password should be at least 4 characters long",
    };
  }

  const client = await connectToDatanbase();
  const db = client.db();

  const existingUser = await db
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    client.close();
    return { message: "User exists already!" };
  }

  const hasedPassword = await hashPassword(enteredPassword);

  const result = await db.collection("users").insertOne({
    email: enteredEmail,
    password: hasedPassword,
  });
  client.close();
  return { message: "User created!" };
};

export default registerUser;
