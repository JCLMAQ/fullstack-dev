/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `associated_id` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - Added the required column `fileSize` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimeType` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileSize` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimeType` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploadedById` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "associatedId" TEXT,
ADD COLUMN     "associationType" TEXT,
ADD COLUMN     "bucketName" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "checksum" TEXT,
ADD COLUMN     "commentId" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "downloadCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "encoding" TEXT,
ADD COLUMN     "expiresAt" TIMESTAMP(3),
ADD COLUMN     "extension" TEXT,
ADD COLUMN     "fileSize" INTEGER NOT NULL,
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "isProcessed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPublicDownload" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastAccessedAt" TIMESTAMP(3),
ADD COLUMN     "mimeType" TEXT NOT NULL,
ADD COLUMN     "ocrText" TEXT,
ADD COLUMN     "originalName" TEXT NOT NULL,
ADD COLUMN     "postId" TEXT,
ADD COLUMN     "processingStatus" TEXT DEFAULT 'pending',
ADD COLUMN     "profileUserId" TEXT,
ADD COLUMN     "storagePath" TEXT,
ADD COLUMN     "storageType" TEXT NOT NULL DEFAULT 'local',
ADD COLUMN     "storageUrl" TEXT,
ADD COLUMN     "storyId" TEXT,
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "uploadedById" TEXT,
ADD COLUMN     "version" TEXT DEFAULT '1.0',
ADD COLUMN     "virusScanStatus" TEXT DEFAULT 'pending',
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "storageName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
DROP COLUMN "associated_id",
DROP COLUMN "type",
DROP COLUMN "url",
ADD COLUMN     "altText" TEXT,
ADD COLUMN     "associatedId" TEXT,
ADD COLUMN     "associationType" TEXT,
ADD COLUMN     "bucketName" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "fileSize" INTEGER NOT NULL,
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "isProcessed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mimeType" TEXT NOT NULL,
ADD COLUMN     "numSeq" SERIAL NOT NULL,
ADD COLUMN     "orgId" TEXT,
ADD COLUMN     "originalName" TEXT NOT NULL,
ADD COLUMN     "postId" TEXT,
ADD COLUMN     "profileUserId" TEXT,
ADD COLUMN     "storagePath" TEXT,
ADD COLUMN     "storageType" TEXT NOT NULL DEFAULT 'local',
ADD COLUMN     "storageUrl" TEXT,
ADD COLUMN     "storyId" TEXT,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "thumbnailUrl" TEXT,
ADD COLUMN     "uploadedById" TEXT NOT NULL,
ADD COLUMN     "variants" JSON,
ADD COLUMN     "width" INTEGER,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "sequence" SET DEFAULT 0,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Image_id_seq";

-- CreateIndex
CREATE INDEX "File_ownerId_idx" ON "File"("ownerId");

-- CreateIndex
CREATE INDEX "File_uploadedById_idx" ON "File"("uploadedById");

-- CreateIndex
CREATE INDEX "File_associatedId_associationType_idx" ON "File"("associatedId", "associationType");

-- CreateIndex
CREATE INDEX "File_orgId_idx" ON "File"("orgId");

-- CreateIndex
CREATE INDEX "File_createdAt_idx" ON "File"("createdAt");

-- CreateIndex
CREATE INDEX "File_mimeType_idx" ON "File"("mimeType");

-- CreateIndex
CREATE INDEX "File_category_idx" ON "File"("category");

-- CreateIndex
CREATE INDEX "File_isDeleted_idx" ON "File"("isDeleted");

-- CreateIndex
CREATE INDEX "File_checksum_idx" ON "File"("checksum");

-- CreateIndex
CREATE INDEX "File_processingStatus_idx" ON "File"("processingStatus");

-- CreateIndex
CREATE INDEX "File_virusScanStatus_idx" ON "File"("virusScanStatus");

-- CreateIndex
CREATE INDEX "File_tags_idx" ON "File"("tags");

-- CreateIndex
CREATE INDEX "Image_uploadedById_idx" ON "Image"("uploadedById");

-- CreateIndex
CREATE INDEX "Image_associatedId_associationType_idx" ON "Image"("associatedId", "associationType");

-- CreateIndex
CREATE INDEX "Image_orgId_idx" ON "Image"("orgId");

-- CreateIndex
CREATE INDEX "Image_createdAt_idx" ON "Image"("createdAt");

-- CreateIndex
CREATE INDEX "Image_mimeType_idx" ON "Image"("mimeType");

-- CreateIndex
CREATE INDEX "Image_isDeleted_idx" ON "Image"("isDeleted");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_profileUserId_fkey" FOREIGN KEY ("profileUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_profileUserId_fkey" FOREIGN KEY ("profileUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE SET NULL ON UPDATE CASCADE;
