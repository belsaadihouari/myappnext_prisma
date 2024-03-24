import prisma from "@/util/prismaClient";

export default async function hadlergetsales(req, res) {
  if (req.method === "GET") {
    try {
      const getsales = await prisma.vente.findMany({
        include: {
          product: {
            select: {
              title: true,
            },
          },
          user: {
            select: {
              username: true,
            },
          },
        },
      });

      const salesWithDetails = getsales.map((sale) => ({
        id: sale.id,
        price: sale.price,
        productTitle: sale.product.title,
        username: sale.user.username,
      }));

      return res.json(salesWithDetails);
    } catch (error) {
      res.json({ message: "internal server error" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
