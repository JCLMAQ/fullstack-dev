-- AddForeignKey
ALTER TABLE "TagDictionary" ADD CONSTRAINT "TagDictionary_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
