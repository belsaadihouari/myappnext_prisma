import prisma from "@/util/prismaClient";

export default async function handlerdelete(req, res) {
  if (req.method === "GET") {
    try {
      await prisma.product.delete({
        where: { id: parseInt(req.query.id) },
      });
      return res.json({ message: "product deleted successfuly" });
    } catch {
      return res.json({ error: "internal server error" });
    }
  }
}
