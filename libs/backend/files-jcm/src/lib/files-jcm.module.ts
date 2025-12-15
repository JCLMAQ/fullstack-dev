import { DbConfigModule } from '@be/db-config';
import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FilesJcmController } from './files-jcm.controller';
import { FilesJcmService } from './files-jcm.service';

@Module({
  imports: [PrismaClientModule, DbConfigModule, ConfigModule],
  controllers: [FilesJcmController],
  providers: [FilesJcmService],
  exports: [FilesJcmService],
})
export class FilesJcmModule {}
