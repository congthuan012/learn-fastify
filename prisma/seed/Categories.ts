import { PrismaClient } from "@prisma/client";

async function Categories(prisma: PrismaClient) {
      return await prisma.categories.createMany({
            data: cate,
            skipDuplicates: true,
      });
}

export default Categories;

const cate = [
      {
            id: 1,
            name: "Alphabet/Other",
            is_popular: false,
            manufacturer: 0,
            parent: 0
      },
      {
            id: 2,
            name: "A line",
            is_popular: false,
            manufacturer: 0,
            parent: 0
      },
      {
            id: 3,
            name: "Ka line",
            is_popular: false,
            manufacturer: 0,
            parent: 0
      },
      {
            name: "IS250",
            is_popular: true,
            manufacturer: 1,
            parent: 1
      },
      {
            name: "CT200h",
            is_popular: false,
            manufacturer: 1,
            parent: 1
      },
      {
            name: "GS F",
            is_popular: false,
            manufacturer: 1,
            parent: 1
      },
      {
            name: "Unimog",
            is_popular: false,
            manufacturer: 2,
            parent: 2
      },
      {
            name: "slopeswagen",
            is_popular: false,
            manufacturer: 2,
            parent: 3
      },
      {
            name: "Cullinan",
            is_popular: true,
            manufacturer: 3,
            parent: 3
      },
];