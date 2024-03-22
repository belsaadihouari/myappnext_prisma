import prisma from "@/util/prismaClient";
import crypto from "@/util/cryptDecrypt";
import { validation } from "@/util/validationSchemaZod";
export default async function handlerAdd(req, res) {
  if (req.method === "POST") {
    try {
      const verification = validation.safeParse(req.body);
      if (!verification.success) {
        return res.json({ validator: verification.error });
      }

      const verify = await prisma.user.findFirst({
        where: { email: req.body.email },
      });
      if (verify) {
        return res.json({ message: "Email already exist" });
      }
      const hachPassword = await crypto(req.body.password);
      const newUser = await prisma.user.create({
        data: {
          username: req.body.username,
          email: req.body.email,
          password: hachPassword,
        },
      });
      return res.json({ newUser });
    } catch (error) {
      return res.json({ error: "internal server error" });
    }
  }
}
