/*
  Warnings:

  - You are about to drop the `TagDictionary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagMgt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagMgtType` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "DictioEntryType" ADD VALUE 'TAG';

-- DropForeignKey
ALTER TABLE "TagDictionary" DROP CONSTRAINT "TagDictionary_languageId_fkey";

-- DropForeignKey
ALTER TABLE "TagDictionary" DROP CONSTRAINT "TagDictionary_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagMgt" DROP CONSTRAINT "TagMgt_tagMgtTypeId_fkey";

-- DropForeignKey
ALTER TABLE "_FilesTags" DROP CONSTRAINT "_FilesTags_B_fkey";

-- DropForeignKey
ALTER TABLE "_GroupTags" DROP CONSTRAINT "_GroupTags_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostTags" DROP CONSTRAINT "_PostTags_B_fkey";

-- DropForeignKey
ALTER TABLE "_TaskTags" DROP CONSTRAINT "_TaskTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_TodoTags" DROP CONSTRAINT "_TodoTags_A_fkey";

-- DropTable
DROP TABLE "TagDictionary";

-- DropTable
DROP TABLE "TagMgt";

-- DropTable
DROP TABLE "TagMgtType";

-- CreateTable
CREATE TABLE "TagValue" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" INTEGER NOT NULL DEFAULT 0,
    "isDeletedDT" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "tagCategoriesId" INTEGER NOT NULL,

    CONSTRAINT "TagValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagCategories" (
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

    CONSTRAINT "TagCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagTranslate" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "languageId" INTEGER NOT NULL,
    "translation" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "TagTranslate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TagValue_name_key" ON "TagValue"("name");

-- AddForeignKey
ALTER TABLE "TagValue" ADD CONSTRAINT "TagValue_tagCategoriesId_fkey" FOREIGN KEY ("tagCategoriesId") REFERENCES "TagCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagTranslate" ADD CONSTRAINT "TagTranslate_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagTranslate" ADD CONSTRAINT "TagTranslate_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "TagValue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupTags" ADD CONSTRAINT "_GroupTags_B_fkey" FOREIGN KEY ("B") REFERENCES "TagValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTags" ADD CONSTRAINT "_PostTags_B_fkey" FOREIGN KEY ("B") REFERENCES "TagValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilesTags" ADD CONSTRAINT "_FilesTags_B_fkey" FOREIGN KEY ("B") REFERENCES "TagValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TodoTags" ADD CONSTRAINT "_TodoTags_A_fkey" FOREIGN KEY ("A") REFERENCES "TagValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskTags" ADD CONSTRAINT "_TaskTags_A_fkey" FOREIGN KEY ("A") REFERENCES "TagValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
