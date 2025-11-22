-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_uploadedById_fkey";

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "uploadedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
