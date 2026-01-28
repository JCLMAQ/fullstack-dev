/*
  Warnings:

  - You are about to drop the column `tagMgtModelId` on the `TagMgt` table. All the data in the column will be lost.
  - Added the required column `tagMgtTestId` to the `TagMgt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TagMgt" DROP COLUMN "tagMgtModelId",
ADD COLUMN     "tagMgtTestId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TagMgt" ADD CONSTRAINT "TagMgt_tagMgtTestId_fkey" FOREIGN KEY ("tagMgtTestId") REFERENCES "TagMgtTest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
