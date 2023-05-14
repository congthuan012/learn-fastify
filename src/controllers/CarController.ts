import { FastifyRequest, FastifyReply } from 'fastify'
import { getList, getConfig, store as createCar } from '../services/car';
import prisma from '../services/prisma';
import { error } from 'console';

export async function index(request: FastifyRequest, reply: FastifyReply) {
      try {
            const data: any = request.query;

            const search = {
                  name: data.name ?? '',
                  category: data.category ?? null,
                  price_from: data.price_from ?? null,
                  price_to: data.price_to ?? null,
                  color: data.color ?? null,
                  fuel: data.fuel ?? null,
                  status: data.status ?? null,
                  limit: 10,
                  page: data.page ?? 1,
            }

            await getList(search).then(list => {
                  return reply.status(200).send({ message: 'OK', cars: list });
            })
      } catch (e) {
            console.log(e);

            return reply.status(500).send({ message: 'Server error', error: e });
      }
}

export async function create(request: FastifyRequest, reply: FastifyReply) {
      try {
            const config = await getConfig();
            return reply.send({ message: 'get config', config: config });
      } catch (e) {
            return reply.status(500).send({ message: 'Server error', error: e });
      }
}

export async function store(request: FastifyRequest, reply: FastifyReply) {
      try {
            const data: any = request.body;

            const inValid = handleValidate(data);
            if (inValid) {
                  return reply.status(422).send({
                        message: 'Data validation failed',
                        errors: inValid
                  })
            }

            await createCar(data).then(response => {
                  const types: Array<number> = data.types;

                  const dataType = types.map(type => {
                        return {
                              car_id: response.id,
                              type_id: type
                        }
                  })

                  prisma.car_types.createMany({
                        data: dataType,
                        skipDuplicates: true
                  });

                  const equipmentSpecifications: Array<number> = data.equipment_specifications;

                  const dataEquipmentSpecifications = equipmentSpecifications.map(equipment => {
                        return {
                              equipment_specification_id: equipment,
                              car_id: response.id
                        }
                  })

                  prisma.car_equipment_specifications.createMany({
                        data: dataEquipmentSpecifications,
                        skipDuplicates: true
                  })

                  return reply.status(200).send({
                        message: 'Create Cars successfully',
                        response: response
                  });
            }).catch(error => {
                  console.log(error);
                  return reply.status(500).send({ message: 'Error creating cars', error: error });
            })


            return reply.send({ message: 'get config' });
      } catch (e) {
            return reply.status(500).send({ message: 'Server error', error: e });
      }
}

const handleValidate = (data: DataPost) => {
      const errors: any = {};
      let isValid = true;

      for (const key of Object.keys(data)) {
            if (!data[key as keyof DataPost]) {
                  isValid = false;
                  errors[key] = `${key} is required`;
            }
      }

      if (!isValid) {
            return errors;
      }

      return undefined;
}

interface DataPost {
      name: string,
      model_name: string,
      mission_description: string,
      region_id: number,
      category_id: number,
      body_type_id: number,
      mission_id: number,
      drive_system: number,
      color: number,
      repair_history: number,
      fuel: number,
      handle: number,
      passenger: number,
      number_doors: number,
      displacement: number,
      slide_door: number,
      status: number,
      model_year: number,
      running: number,
      price: number,
      total_payment: number,
      length: number,
      width: number,
      height: number,
      remaining_car_inspection: number,
      has_certified: Boolean,
      guaranteed: Boolean,
      types: Array<number>,
      equipment_specifications: Array<number>
}