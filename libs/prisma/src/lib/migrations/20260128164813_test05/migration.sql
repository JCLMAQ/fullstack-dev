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
