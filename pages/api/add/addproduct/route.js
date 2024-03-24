import prisma from "@/util/prismaClient";

export default async function handlerAddProduct(req, res) {
  if (req.method === "POST") {
    try {
      const addProduct = await prisma.product.create({
        data: {
          title: req.body.title,
          description: req.body.description,
          createdBy: req.body.createdBy,
        },
      });
      
      return res.json(addProduct);
    } catch {
      
      return res.json({ message: "internal server error" });
    }finally {
      await prisma.$disconnect();
    }
  }
}
