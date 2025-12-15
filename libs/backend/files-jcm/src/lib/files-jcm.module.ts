import { Module } from '@nestjs/common';
import { FilesJcmController } from './files-jcm.controller';
import { FilesJcmService } from './files-jcm.service';

@Module({
  controllers: [FilesJcmController],
  providers: [FilesJcmService],
  exports: [FilesJcmService],
})
export class FilesJcmModule {}
