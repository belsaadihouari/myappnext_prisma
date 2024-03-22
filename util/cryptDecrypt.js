import bcrypt from "bcrypt";

export default async function crypto(password) {
  const salt = await bcrypt.genSalt();
  const hachePassword = await bcrypt.hash(password, salt);
  return hachePassword;
}
