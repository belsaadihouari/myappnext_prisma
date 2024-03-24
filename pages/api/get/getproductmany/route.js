import prisma from "@/util/prismaClient";

export default async function handlergetproduct(req, res) {
  if (req.method === "GET") {
    try {
      const getProduct = await prisma.product.findMany();
      return res.json(getProduct);
    } catch (error) {
      return res.json({ error: "internal server error" });
    }finally {
      await prisma.$disconnect();
    }
  }
}
