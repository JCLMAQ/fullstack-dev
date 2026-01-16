/*
  Warnings:

  - Added the required column `countryIso` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryIso` to the `Phone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "countryIso" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Phone" ADD COLUMN     "countryIso" TEXT NOT NULL;
