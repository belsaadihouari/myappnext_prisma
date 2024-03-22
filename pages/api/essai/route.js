import prisma from "@/util/prismaClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const newUser = await prisma.user.create({
        data: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      });
      return res.json({ message: "ok" });
    } catch {
      return res.status(500).json({ message: "internal server error" });
    }
  }

  if (req.method === "GET") {
    try {
      const getUser = await prisma.user.findMany();
      return res.json({ data: getUser });
    } catch {
      return res.status(500).json({ message: "internal server error" });
    }
  }
}
