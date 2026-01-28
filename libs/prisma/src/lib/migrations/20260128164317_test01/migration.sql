/*
  Warnings:

  - You are about to drop the `TagDictionary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagMgt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagMgtModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagDictionary" DROP CONSTRAINT "TagDictionary_languageId_fkey";

-- DropForeignKey
ALTER TABLE "TagDictionary" DROP CONSTRAINT "TagDictionary_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagMgt" DROP CONSTRAINT "TagMgt_tagMgtModelId_fkey";

-- DropTable
DROP TABLE "TagDictionary";

-- DropTable
DROP TABLE "TagMgt";

-- DropTable
DROP TABLE "TagMgtModel";
