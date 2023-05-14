import prisma from "./prisma";
import { Prisma } from "@prisma/client"

export async function getList(search: {
      name: string,
      category: string,
      price_from: string,
      price_to: string,
      color: string,
      fuel: string,
      status: string,
      limit: number,
      page: number,
}) {
      const offset = (search.page - 1) * search.limit + 1;
      let where = [`c.deleted_at is null`];

      if (search.name) {
            where.push(`c.name like '%${search.name}%'`);
      }

      if (search.category) {
            where.push(`c.category_id = '${search.category}'`);
      }

      if (search.price_from) {
            where.push(`c.price >= '${search.category}'`);
      }


      if (search.price_to) {
            where.push(`c.price <= '${search.category}'`);
      }

      if (search.color) {
            where.push(`c.color = '${search.color}'`);
      }

      if (search.fuel) {
            where.push(`c.fuel = '${search.fuel}'`);
      }

      if (search.status) {
            where.push(`c.status = '${search.status}'`);
      }

      const whereString = `SELECT c.id,c.name ,c.price,c.status,c.fuel,c.color "color_id",cl.name "color",cg.name "category_name",cg.id "category_id"
      FROM public.cars c
      LEFT JOIN public.categories cg on c.category_id = cg.id
      LEFT JOIN public.color cl on c.color = cl.id
      WHERE ${where.join(' AND ')}
      ORDER BY id DESC
      LIMIT ${search.limit} OFFSET ${offset}`;

      return prisma.$queryRawUnsafe(whereString);
      // return prisma.cars.findMany({
      //       select: {
      //             name: true,
      //             price: true,
      //             category_id: true,
      //             color: true,
      //             fuel: true,
      //             status: true,
      //       },
      //       take: 10,
      // });
}

export async function getConfig() {
      const bodyTypes = await prisma.body_types.findMany();
      const color = await prisma.color.findMany();
      // const manufacturer = await prisma.manufacturer.findMany();
      const categories = await prisma.categories.findMany({
            where: {
                  parent: {
                        not: 0
                  }
            },
            select: {
                  id: true,
                  name: true,
            }
      });
      const equipmentSpecifications = await prisma.equipment_specifications.findMany();


      const types = await prisma.types.findMany();
      const regions = await prisma.regions.findMany({
            select: {
                  id: true,
                  name: true,
            }
      });

      return {
            bodyTypes,
            color,
            categories,
            equipmentSpecifications,
            types,
            regions,
      }
}

export async function store(data: any) {
      return await prisma.cars.create({
            data: {
                  body_type_id: data.body_type_id,
                  color: data.color,
                  category_id: Number.parseInt(data.category_id),
                  comment_person: data.comment_person ?? false,
                  displacement: data.displacement,
                  drive_system: data.drive_system,
                  fuel: data.fuel,
                  guaranteed: data.guaranteed,
                  handle: !!data.handle,
                  has_certified: data.has_certified,
                  height: data.height ? Number.parseFloat(data.height) : 0.0,
                  length: data.length ? Number.parseFloat(data.length) : 0.0,
                  load_display: false,
                  mission_id: data.mission_id,
                  model_name: data.model_name,
                  model_year: data.model_year ? Number.parseInt(data.model_year) : 0.0,
                  number_doors: data.number_doors,
                  name: data.name,
                  passenger: data.passenger,
                  price: data.price ? Number.parseInt(data.price) : 0,
                  region_id: data.region_id,
                  remaining_car_inspection: data.remaining_car_inspection ? Number.parseInt(data.remaining_car_inspection) : 0,
                  repair_history: data.repair_history,
                  running: data.running ? Number.parseInt(data.running) : 0,
                  slide_door: data.slide_door,
                  status: data.status,
                  total_payment: data.total_payment ? Number.parseFloat(data.total_payment) : 0.0,
                  width: Number.parseFloat(data.width ?? '0.0'),
            },
      });
}