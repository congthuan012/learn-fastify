import { PrismaClient } from "@prisma/client";

async function Regions(prisma: PrismaClient) {
      return await prisma.regions.createMany({
            data: regions,
            skipDuplicates: true,
      });
}

export default Regions;

const regions = [
      {
            id: 1,
            name: "Hokkaido",
      },
      {
            name: "Sapporo",
            parent_id: 1
      },
];