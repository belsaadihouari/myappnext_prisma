import prisma from "@/util/prismaClient";

export default async function handlerdelete(req, res) {
  if (req.method === "GET") {
    try {
      await prisma.user.deleteMany();
      return res.json({ message: "all data deleted successfuly" });
    } catch (error) {
     return res.json({ message: "internal server error" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
