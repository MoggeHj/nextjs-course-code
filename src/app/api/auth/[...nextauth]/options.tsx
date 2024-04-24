import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatanbase from "@root/lib/db";
import { comparePassword } from "@root/lib/auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        console.log("Credentials: ", { credentials });
        const { email, password } = credentials;

        const client = await connectToDatanbase();
        const db = client.db();

        const existingUser = await db
          .collection("users")
          .findOne({ email: email });

        if (!existingUser) {
          client.close();
          throw new Error("User does not exists!");
        }

        const isValid = await comparePassword(password, existingUser.password);

        if (!isValid) {
          client.close();
          throw new Error("Invalid password!");
        }

        return { id: "1", email: existingUser.email };
      },
    }),
  ],
};
