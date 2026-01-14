/*
  Warnings:

  - You are about to drop the column `number` on the `Address` table. All the data in the column will be lost.
  - Added the required column `buildingNum` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "number",
ADD COLUMN     "aptNum" TEXT,
ADD COLUMN     "buildingNum" TEXT NOT NULL;
