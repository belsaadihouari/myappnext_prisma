import prisma from "@/util/prismaClient";

export default async function handlerdelete(req, res) {
  if (req.method === "GET") {
    await prisma.user.deleteMany();
    return res.json({ message: "all data deleted successfuly" });
  }
}
