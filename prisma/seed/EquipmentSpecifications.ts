import { PrismaClient } from "@prisma/client";

async function EquipmentSpecifications(prisma: PrismaClient) {
      return await prisma.equipment_specifications.createMany({
            data: equipmentSpecifications,
            skipDuplicates: true,
      });
}

export default EquipmentSpecifications;

const equipmentSpecifications = [
      {
            group: "Basic Equipment",
            group_name: "basic_equipment",
            name: "power steering"
      },
      {
            group: "Basic Equipment",
            group_name: "basic_equipment",
            name: "Power window"
      },
      {
            group: "Exterior",
            group_name: "basic_equipment",
            name: "HID headlight"
      },
      {
            group: "Interior/Interior",
            group_name: "interior",
            name: " 3rd row seat"
      },
      {
            group: "Safety device",
            group_name: "safety_device",
            name: " Airbag"
      },
      {
            group: "situation",
            group_name: "situation",
            name: " one owner"
      },
];