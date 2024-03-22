import prisma from "@/util/prismaClient";

export default async function handlerget(req, res) {
  if (req.method === "GET") {
    try {
      const userget = await prisma.user.findUnique({
        where: { id: parseInt(req.query.id) },
      });
      return res.json({ userget });
    } catch {
      res.json({ error: "internal server error" });
    }
  }
}
