/*
  Warnings:

  - You are about to drop the `_GroupToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_GroupToUser" DROP CONSTRAINT "_GroupToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_GroupToUser" DROP CONSTRAINT "_GroupToUser_B_fkey";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "groupId" INTEGER;

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "isDeleted" INTEGER DEFAULT 0,
ADD COLUMN     "isDeletedDT" TIMESTAMP(3),
ADD COLUMN     "isPublic" BOOLEAN DEFAULT true,
ADD COLUMN     "published" BOOLEAN DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_GroupToUser";

-- CreateTable
CREATE TABLE "_GroupTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_GroupTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PostTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PostTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FilesTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FilesTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_TodoTags" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TodoTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_TaskTags" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TaskTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_GroupTags_B_index" ON "_GroupTags"("B");

-- CreateIndex
CREATE INDEX "_PostTags_B_index" ON "_PostTags"("B");

-- CreateIndex
CREATE INDEX "_FilesTags_B_index" ON "_FilesTags"("B");

-- CreateIndex
CREATE INDEX "_TodoTags_B_index" ON "_TodoTags"("B");

-- CreateIndex
CREATE INDEX "_TaskTags_B_index" ON "_TaskTags"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupTags" ADD CONSTRAINT "_GroupTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupTags" ADD CONSTRAINT "_GroupTags_B_fkey" FOREIGN KEY ("B") REFERENCES "TagMgt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTags" ADD CONSTRAINT "_PostTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTags" ADD CONSTRAINT "_PostTags_B_fkey" FOREIGN KEY ("B") REFERENCES "TagMgt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilesTags" ADD CONSTRAINT "_FilesTags_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilesTags" ADD CONSTRAINT "_FilesTags_B_fkey" FOREIGN KEY ("B") REFERENCES "TagMgt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TodoTags" ADD CONSTRAINT "_TodoTags_A_fkey" FOREIGN KEY ("A") REFERENCES "TagMgt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TodoTags" ADD CONSTRAINT "_TodoTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskTags" ADD CONSTRAINT "_TaskTags_A_fkey" FOREIGN KEY ("A") REFERENCES "TagMgt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskTags" ADD CONSTRAINT "_TaskTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
