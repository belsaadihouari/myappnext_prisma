import prisma from "@/util/prismaClient";

export default async function handlersale(req, res) {
  if (req.method === "POST") {
    try {
      const addsale = await prisma.vente.create({
        data: {
          price: req.body.price,
          productIs: req.body.productIs,
          selBy: req.body.selBy,
        },
      });

      return res.json(addsale);
    } catch (error) {
      return res.json({ message: "internal server error" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
