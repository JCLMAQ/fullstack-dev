import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { DictionariesController } from './dictionaries.controller';
import { DictionariesService } from './dictionaries.service';

// agrégation/lecture transversale (Language, Word, Translation) pour fournir des dictionnaires prêts pour le frontend.

@Module({
  imports: [PrismaClientModule],
  controllers: [DictionariesController],
  providers: [DictionariesService],
  exports: [DictionariesService],
})
export class DictionariesModule {}
