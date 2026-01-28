-- CreateTable
CREATE TABLE "TagMgtModel" (
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

    CONSTRAINT "TagMgtModel_pkey" PRIMARY KEY ("id")
);
