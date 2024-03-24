import prisma from "@/util/prismaClient";

export default async function handlerdelete(req, res) {
  if (req.method === "GET") {
    try {
      await prisma.user.delete({
        where: { id: parseInt(req.query.id) },
      });
      return res.json({ message: "user deleted successfuly" });
    } catch (error) {
      return res.json({ message: "iternal server error" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
