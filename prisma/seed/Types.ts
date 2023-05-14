import { PrismaClient } from "@prisma/client";

async function Types(prisma: PrismaClient) {
      return await prisma.types.createMany({
            data: types,
            skipDuplicates: true,
      });
}

export default Types;

const types = [
      {
            name: "domestic car",
      },
      {
            name: "Welfare vehicles",
      },
];