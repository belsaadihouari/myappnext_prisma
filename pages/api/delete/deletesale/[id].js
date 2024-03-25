import prisma from "@/util/prismaClient";

export default async function handlerdeletesale(req, res) {
  if (req.method === "GET") {
    try {
      await prisma.vente.delete({
        where: {
          id: parseInt(req.query.id),
        },
      });

      return res.json({ message: "sale deleted successfuly" });
    } catch (error) {
      return res.json({ error: "internal server error" });
    } finally {
      prisma.$disconnect;
    }
  } else {
    return;
  }
}
