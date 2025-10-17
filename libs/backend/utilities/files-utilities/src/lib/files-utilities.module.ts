import { Global, Module } from '@nestjs/common';
import { DualStorageController } from './controllers/dual-storage.controller';
import { FileStorageModule } from './file-storage.module';
import { FilesUtilitiesController } from './files-utilities.controller';
import { FilesUtilitiesService } from './files-utilities.service';
import { EnhancedFilesService } from './services/enhanced-files-simple.service';

@Global()
@Module({
  imports: [FileStorageModule],
  controllers: [FilesUtilitiesController, DualStorageController],
  providers: [
    FilesUtilitiesService,
    EnhancedFilesService,
  ],
  exports: [
    FilesUtilitiesService,
    EnhancedFilesService,
    FileStorageModule,
  ],
})
export class FilesUtilitiesModule {}
