import { Global, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FilesUtilitiesController } from './files-utilities.controller';
import { FilesUtilitiesService } from './files-utilities.service';

@Global()
@Module({
  imports: [
    MulterModule.register({
    dest: './files',
    })
   ],
  controllers: [FilesUtilitiesController],
  providers: [FilesUtilitiesService],
  exports: [FilesUtilitiesService],
})
export class FilesUtilitiesModule {}
