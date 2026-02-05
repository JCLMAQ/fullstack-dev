-- AlterTable
ALTER TABLE "TagValue" ADD COLUMN     "mainTag" INTEGER;

-- AddForeignKey
ALTER TABLE "TagValue" ADD CONSTRAINT "TagValue_mainTag_fkey" FOREIGN KEY ("mainTag") REFERENCES "TagValue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
