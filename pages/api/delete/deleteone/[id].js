import prisma from "@/util/prismaClient";

export default async function handlerdelete(req, res) {
  if (req.method === "GET") {
    await prisma.user.delete({
      where: { id: parseInt(req.query.id) },
    });
    return res.json({ message: "user deleted successfuly" });
  }
}
