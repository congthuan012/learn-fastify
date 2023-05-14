import { PrismaClient } from "@prisma/client";

async function BodyType(prisma: PrismaClient) {
      return await prisma.body_types.createMany({
            data: bodyTypes,
            skipDuplicates: true,
      });
}

export default BodyType;

const bodyTypes = [
      {
            id: 10,
            name: "light car",
      },
      {
            id: 14,
            name: "light van/light wagon",
      },
      {
            id: 15,
            name: "light truck",
      },
      {
            id: 5,
            name: "Light RV",
      },
      {
            id: 1,
            name: "sedan/hardtop",
      },
      {
            id: 2,
            name: "coupe",
      },
      {
            id: 7,
            name: "open",
      },
      {
            id: 8,
            name: "minivan/one box",
      },
      {
            id: 4,
            name: "Station Wagon",
      },
      {
            id: 3,
            name: "compact/hatchback",
      },
      {
            id: 6,
            name: "SUV/Cross country",
      },
      {
            id: 9,
            name: "van/commercial vehicle",
      },
      {
            id: 11,
            name: "pick-up truck",
      },
      {
            id: 13,
            name: "truck",
      },
      {
            id: 16,
            name: "bus",
      },
      {
            id: 12,
            name: "camper",
      },
      {
            id: 17,
            name: "construction vehicle/lift",
      },
      {
            id: 99,
            name: "others",
      },
];