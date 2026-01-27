/*
  Warnings:

  - You are about to drop the column `Language` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "DictioEntryType" AS ENUM ('WORD', 'PHRASE', 'SENTENCE', 'IDIOM');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Language",
ADD COLUMN     "languageId" INTEGER;

-- DropEnum
DROP TYPE "Language";

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "DictioEntryType" NOT NULL DEFAULT 'WORD',

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Translation" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "definition" TEXT,
    "wordId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_code_key" ON "Language"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Word_slug_key" ON "Word"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_wordId_languageId_key" ON "Translation"("wordId", "languageId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;
