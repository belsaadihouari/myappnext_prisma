import prisma from "@/util/prismaClient";

export default async function handler(req, res) {
  
  if (req.method === "GET") {
    try {
      const getUser = await prisma.user.findMany();
      return res.json(  getUser );
    } catch {
      return res.status(500).json({ message: "internal server error" });
    }finally {
      await prisma.$disconnect();
    }
  }
}
