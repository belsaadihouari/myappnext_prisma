import prisma from "@/util/prismaClient";

export default async function handlergetproduct(req, res) {
  if (req.method === "POST") {
    try {
      const getProduct = await prisma.user.findMany({
        where: { id: req.body.id },
        select: { product: true },
      });
      return res.json(getProduct);
    } catch (error) {
      return res.json({ error: "internal server error" });
    }
  }
}
