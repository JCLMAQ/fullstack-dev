-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferences" JSON;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" INTEGER NOT NULL DEFAULT 0,
    "isDeletedDT" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "tagModelId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagModel" (
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

    CONSTRAINT "TagModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagDictionary" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "languageId" INTEGER NOT NULL,
    "translation" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "TagDictionary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_tagModelId_fkey" FOREIGN KEY ("tagModelId") REFERENCES "TagModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagDictionary" ADD CONSTRAINT "TagDictionary_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagDictionary" ADD CONSTRAINT "TagDictionary_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
