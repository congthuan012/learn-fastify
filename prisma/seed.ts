import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import BodyType from "./seed/BodyType";
import Categories from "./seed/Categories";
import Colors from "./seed/Color";
import EquipmentSpecifications from "./seed/EquipmentSpecifications";
import Manufacturer from "./seed/Manufacturer";
import Regions from "./seed/Regions";
import Types from "./seed/Types";
const prisma = new PrismaClient();

async function main() {
  const bodyType = BodyType(prisma);
  const categories = Categories(prisma);
  const colors = Colors(prisma);
  const equipmentSpecifications = EquipmentSpecifications(prisma);
  const manufacturer = Manufacturer(prisma);
  const regions = Regions(prisma);
  const types = Types(prisma);

  const hash = bcrypt.hashSync('123456', 10);
  await prisma.users.createMany({
    data: [
      {
        username: 'admin',
        password: hash,
      }
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
