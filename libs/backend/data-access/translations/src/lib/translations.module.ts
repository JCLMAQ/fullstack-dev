import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { TranslationsController } from './translations.controller';
import { TranslationsService } from './translations.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [TranslationsController],
  providers: [TranslationsService],
  exports: [TranslationsService],
})
export class TranslationsModule {}
