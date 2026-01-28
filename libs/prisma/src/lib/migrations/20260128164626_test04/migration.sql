/*
  Warnings:

  - You are about to drop the `TagMgtModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TagMgtModel";

-- CreateTable
CREATE TABLE "TagMgtTest" (
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

    CONSTRAINT "TagMgtTest_pkey" PRIMARY KEY ("id")
);
