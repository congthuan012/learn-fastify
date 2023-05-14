import { PrismaClient } from "@prisma/client";

async function Manufacturer(prisma: PrismaClient) {
      return await prisma.manufacturer.createMany({
            data: manufacturers,
            skipDuplicates: true,
      });
}

export default Manufacturer;

const manufacturers = [
      {
            id:1,
            name: "Lexus",
            country: "Japan",
      },
      {
            id:2,
            name: "Mercedes-Benz",
            country: "Germany",
      },
      {
            id:3,
            name: "England",
            country: "country 3",
      },
];