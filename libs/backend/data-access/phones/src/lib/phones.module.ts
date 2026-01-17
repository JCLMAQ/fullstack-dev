import { PrismaClientModule } from '@db/prisma-client';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';

@Module({
  imports: [PrismaClientModule, HttpModule],
  controllers: [PhonesController],
  providers: [PhonesService],
  exports: [PhonesService],
})
export class PhonesModule {}
