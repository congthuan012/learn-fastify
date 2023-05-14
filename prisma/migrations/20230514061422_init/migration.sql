-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "manufacturer" DROP NOT NULL;

-- AlterTable
ALTER TABLE "color" ADD COLUMN     "name" TEXT,
ALTER COLUMN "class" DROP NOT NULL;
