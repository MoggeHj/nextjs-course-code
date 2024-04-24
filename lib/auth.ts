import { hash, compare } from "bcryptjs";

const hashPassword = async (password: string) => {
  const hashPassword = await hash(password, 12);

  return hashPassword;
};

const comparePassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);

  return isValid;
};

export { hashPassword, comparePassword };
