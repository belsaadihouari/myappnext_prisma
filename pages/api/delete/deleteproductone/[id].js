import prisma from "@/util/prismaClient";

export default async function handlerdeleteproduct(req, res) {
  if (req.method === "GET") {
    try {
      const salesproduct = await prisma.vente.findMany({
        where: {
          productIs: parseInt(req.query.id),
        },
      });

      if (salesproduct.length !== 0) {
        salesproduct.map(async (item) => {
          await prisma.vente.delete({
            where: {
              id: item.id,
            },
          });
        });
        await prisma.product.delete({
          where: { id: parseInt(req.query.id) },
        });

        return res.json("Product deleted successfuly and his sales");
      } else {
        await prisma.product.delete({
          where: { id: parseInt(req.query.id) },
        });

        return res.json("Product deleted successfuly");
      }
    } catch (error) {
      return res.json({ error: "internal server error" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
