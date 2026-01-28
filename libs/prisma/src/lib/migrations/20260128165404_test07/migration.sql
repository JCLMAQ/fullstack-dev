/*
  Warnings:

  - You are about to drop the column `tagMgtTestId` on the `TagMgt` table. All the data in the column will be lost.
  - You are about to drop the `TagMgtTest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagMgtTypeId` to the `TagMgt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TagMgt" DROP CONSTRAINT "TagMgt_tagMgtTestId_fkey";

-- AlterTable
ALTER TABLE "TagMgt" DROP COLUMN "tagMgtTestId",
ADD COLUMN     "tagMgtTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "TagMgtTest";

-- CreateTable
CREATE TABLE "TagMgtType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" INTEGER NOT NULL DEFAULT 0,
    "isDeletedDT" TIMESTAMP(3),
    "modelName" TEXT NOT NULL,
    "description" TEXT,
    "recordId" TEXT NOT NULL,

    CONSTRAINT "TagMgtType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TagMgt" ADD CONSTRAINT "TagMgt_tagMgtTypeId_fkey" FOREIGN KEY ("tagMgtTypeId") REFERENCES "TagMgtType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
