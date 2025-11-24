import jwtConfig from '@be/jwtconfig';
import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { UploadController } from './upload.controller';
import { UploadsController } from './uploads.controller';

@Module({
  imports: [
    PrismaClientModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  controllers: [ImagesController, UploadController, UploadsController],
  providers: [ImagesService],
  exports: [ImagesService],
})
export class ImagesModule {}
