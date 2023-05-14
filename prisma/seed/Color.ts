import { PrismaClient } from "@prisma/client";

async function Colors(prisma: PrismaClient) {
      return await prisma.color.createMany({
            data: colors,
            skipDuplicates: true,
      });
}

export default Colors;

const colors = [
      {
            name: "Red",
            class: "Color red",
      },
      {
            name: "Blue",
            class: "Color Blue",
      },
];