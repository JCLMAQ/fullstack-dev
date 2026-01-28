-- AddForeignKey
ALTER TABLE "TagDictionary" ADD CONSTRAINT "TagDictionary_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "TagMgt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
