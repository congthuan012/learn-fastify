-- CreateTable
CREATE TABLE "cars" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "region_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "model_name" TEXT NOT NULL,
    "model_year" INTEGER NOT NULL,
    "body_type_id" INTEGER NOT NULL,
    "running" INTEGER NOT NULL,
    "mission_id" INTEGER NOT NULL,
    "drive_system" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" INTEGER NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "remaining_car_inspection" INTEGER NOT NULL,
    "repair_history" INTEGER NOT NULL,
    "fuel" INTEGER NOT NULL,
    "handle" BOOLEAN NOT NULL,
    "passenger" INTEGER NOT NULL,
    "number_doors" INTEGER NOT NULL,
    "displacement" DOUBLE PRECISION NOT NULL,
    "slide_door" INTEGER NOT NULL,
    "total_payment" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "has_certified" BOOLEAN NOT NULL,
    "guaranteed" BOOLEAN NOT NULL,
    "load_display" BOOLEAN NOT NULL,
    "comment_person" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_equipment_specifications" (
    "car_id" INTEGER NOT NULL,
    "equipment_specification_id" INTEGER NOT NULL,

    CONSTRAINT "car_equipment_specifications_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "car_types" (
    "car_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,

    CONSTRAINT "car_types_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufacturer" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categrories" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "is_popular" BOOLEAN NOT NULL,
    "manufacturer" INTEGER NOT NULL,

    CONSTRAINT "categrories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission" (
    "id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipment_specifications" (
    "id" INTEGER NOT NULL,
    "group" TEXT NOT NULL,
    "group_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "equipment_specifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "body_types" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "body_types_pkey" PRIMARY KEY ("id")
);
