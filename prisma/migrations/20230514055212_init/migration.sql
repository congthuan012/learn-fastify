/*
  Warnings:

  - You are about to drop the `categrories` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
CREATE SEQUENCE body_types_id_seq;
ALTER TABLE "body_types" ALTER COLUMN "id" SET DEFAULT nextval('body_types_id_seq');
ALTER SEQUENCE body_types_id_seq OWNED BY "body_types"."id";

-- AlterTable
CREATE SEQUENCE car_equipment_specifications_car_id_seq;
ALTER TABLE "car_equipment_specifications" ALTER COLUMN "car_id" SET DEFAULT nextval('car_equipment_specifications_car_id_seq');
ALTER SEQUENCE car_equipment_specifications_car_id_seq OWNED BY "car_equipment_specifications"."car_id";

-- AlterTable
CREATE SEQUENCE car_types_car_id_seq;
ALTER TABLE "car_types" ALTER COLUMN "car_id" SET DEFAULT nextval('car_types_car_id_seq');
ALTER SEQUENCE car_types_car_id_seq OWNED BY "car_types"."car_id";

-- AlterTable
CREATE SEQUENCE cars_id_seq;
ALTER TABLE "cars" ALTER COLUMN "id" SET DEFAULT nextval('cars_id_seq');
ALTER SEQUENCE cars_id_seq OWNED BY "cars"."id";

-- AlterTable
CREATE SEQUENCE color_id_seq;
ALTER TABLE "color" ALTER COLUMN "id" SET DEFAULT nextval('color_id_seq');
ALTER SEQUENCE color_id_seq OWNED BY "color"."id";

-- AlterTable
CREATE SEQUENCE equipment_specifications_id_seq;
ALTER TABLE "equipment_specifications" ALTER COLUMN "id" SET DEFAULT nextval('equipment_specifications_id_seq');
ALTER SEQUENCE equipment_specifications_id_seq OWNED BY "equipment_specifications"."id";

-- AlterTable
CREATE SEQUENCE manufacturer_id_seq;
ALTER TABLE "manufacturer" ALTER COLUMN "id" SET DEFAULT nextval('manufacturer_id_seq');
ALTER SEQUENCE manufacturer_id_seq OWNED BY "manufacturer"."id";

-- AlterTable
CREATE SEQUENCE mission_id_seq;
ALTER TABLE "mission" ALTER COLUMN "id" SET DEFAULT nextval('mission_id_seq');
ALTER SEQUENCE mission_id_seq OWNED BY "mission"."id";

-- AlterTable
CREATE SEQUENCE regions_id_seq;
ALTER TABLE "regions" ALTER COLUMN "id" SET DEFAULT nextval('regions_id_seq');
ALTER SEQUENCE regions_id_seq OWNED BY "regions"."id";

-- AlterTable
CREATE SEQUENCE types_id_seq;
ALTER TABLE "types" ALTER COLUMN "id" SET DEFAULT nextval('types_id_seq');
ALTER SEQUENCE types_id_seq OWNED BY "types"."id";

-- DropTable
DROP TABLE "categrories";

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_popular" BOOLEAN NOT NULL,
    "manufacturer" INTEGER NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);
