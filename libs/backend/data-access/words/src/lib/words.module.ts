import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [WordsController],
  providers: [WordsService],
  exports: [WordsService],
})
export class WordsModule {}
