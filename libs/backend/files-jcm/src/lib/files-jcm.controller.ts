import { ActiveUser, ActiveUserData } from '@be/common';
import { File } from '@db/prisma';
import { Controller, Get, HttpStatus, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { readFile } from 'fs';
import { I18nLang } from 'nestjs-i18n';
import * as path from 'path';
import { promisify } from 'util';
import { fileMulterOptions } from './files-file-multer-options';
import { imageMulterOptions } from './files-image-multer-options';
import { FilesJcmService } from './files-jcm.service';

export type FileResponse = {
  originalname: string;
  filename: string;
  typeFile: string;
  size: number;
};
const readFileAsyc = promisify(readFile);

/*
  * Image part
  */
@Controller('files-jcm')
export class FilesJcmController {

    private readonly sizes: string[];
  constructor(
    private readonly filesService: FilesJcmService,
    ) {
      // this.sizes = ['25X25', '50X50', '100X100', '200X200', '400X400', '900X900'];
      this.sizes = process.env['IMAGES_SIZING'] ? process.env['IMAGES_SIZING'].split(",") : ['25X25', '50X50', '100X100', '200X200', '400X400', '900X900'];
    }

  // Upload one image file
  @Post('uploadoneimage')
  @UseInterceptors(FileInterceptor('image', imageMulterOptions))
  async uploadedImage(@UploadedFile() file: any, @ActiveUser() user: ActiveUserData) {
    console.log("File data back: ", file)
    // Create the different image sizes
    await this.filesService.saveSizedImages(file);
    // Create the record in DB
    const response = {
      originalName: file.originalname,
      fileName: file.filename,
      typeFile: file.mimetype,
      size: file.size,
      ownerId: user.sub
    };
    const result = await this.filesService.createOneFileInDB(response)
    return {
      status: HttpStatus.OK,
      message: 'Image uploaded successfully!',
      data: response,
      db: result,
    };
  }

  // Upload multiple image files
  @Post('uploadmultipleimages')
  @UseInterceptors(
    FilesInterceptor('image', 10, imageMulterOptions))
  async uploadMultipleImages(@UploadedFiles() files: any, @ActiveUser() user: ActiveUserData) {
    const response: FileResponse[] = [];
    const resultdb: File[]= [];
    files.forEach((file: any) => {
      this.filesService.saveSizedImages(file);
      const fileResponse: any = {
        originalname: file.originalname,
        filename: file.filename,
        typeFile: file.mimetype,
        size: file.size,
        ownerId: user.sub
      };
      // Create the record in DB
      const fileResult: any= this.filesService.createOneFileInDB(fileResponse)
      response.push(fileResponse);
      resultdb.push(fileResult)
    });
    return {
      status: HttpStatus.OK,
      message: 'Images uploaded successfully!',
      data: response,
      db: resultdb,
    };
  }

  // Get the original image (not sized)
  @Get('image/:imagename')
  async getImage(@Param('imagename') image: string, @Res() res: Response) {
    const storagePath = process.env['IMAGES_STORAGE_DEST'];
    const response = res.sendFile(image, { root: storagePath });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }

  // Get the image for a specific predefined size
  @Get('imagesized/:imagename/:size')
  async getImageSized(@Param('imagename') image: string, @Param('size') size: string, @Res() res: Response) {
    // size ex '25X25', '50X50', '100X100', '200X200', '400X400', '900X900'
    const storagePath = process.env['IMAGES_STORAGE_DEST'];
    const rootFolder = storagePath+path.sep+size
    const response = res.sendFile(image, { root: rootFolder });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }

  // Get the image for a specific predefined size
  @Get('imagespecsized/:imagename/:size')
  async getImageSpecSized(@Param('imagename') image: string, @Param('size') widthxheight: string, @Res() res: Response) {
    // size ex '150X100' but maintain proportion
    // Get the image to resize first
    const pathSep = path.sep
    const storagePath = process.env['IMAGES_STORAGE_DEST'];
    const tempStoragePath = process.env['IMAGES_TEMP_STORAGE_DEST']
    // Create the specific image
    const resizedImage = await this.filesService.resizeImage (image, widthxheight);
    // Get the specific images
    const rootFolder = process.env['IMAGES_TEMP_STORAGE_DEST'];
    const response = res.sendFile(resizedImage, { root: rootFolder });
    // TODO Delete the specific sized image once used (send back to the frontend )
    // Delete the stored images
    // const fullPath = `${tempStoragePath}${pathSep}${resizedImage}`
    // const isExist = await fse.exists(fullPath);
    // if (isExist) { await fse.unlink(fullPath); };
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }

  // Delete the temp folder for specific predefined size images
  @Post('imagespecsized/deletefolder')
  async deleteTempImgesFolder() {
    const pathToDelete = process.env['IMAGES_TEMP_STORAGE_DEST'] ?? '';
    if (!pathToDelete) {
      throw new Error('IMAGES_TEMP_STORAGE_DEST not configured');
    }
    const result= await this.filesService.deleteOneFolder(pathToDelete)
      return {
        status: HttpStatus.OK,
        data: result,
      };
  }

  // Delete one image (not a specific siezd one)
  @Post('file/deleteoneimage/:filename')
  async deleteOneImage(@Param('filename') fileName: string, @I18nLang() lang: string) {
    // the delete corresponding record in the DB is done in deleteOneImage service
    const response = await this.filesService.deleteOneImage(fileName, lang);
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }

  /*
  * File part
  */

  // Upload a file
  @Post('uploadonefile')
  @UseInterceptors(FileInterceptor('file', fileMulterOptions))
  async uploadedFile(@UploadedFile() file: {originalname: string, filename: string, mimetype: string, size: number}, @ActiveUser() user: ActiveUserData, @I18nLang() lang: string) {
    const response = {
      originalName: file.originalname,
      fileName: file.filename,
      typeFile: file.mimetype,
      size: file.size,
      ownerId: user.sub
    };
    // Create the corresponding record in DB
    const result = await this.filesService.createOneFileInDB(response)
    return {
      status: HttpStatus.OK,
      message: 'File uploaded successfully!',
      data: response,
      db: result
    };
  }

  // Upload multiple files
  @Post('uploadmultiplefiles')
  @UseInterceptors(FilesInterceptor('file', 10, fileMulterOptions))
  async uploadMultipleFiles(@UploadedFiles() files: [], @ActiveUser() user: ActiveUserData, @I18nLang() lang: string) {
    const response: { originalname: string; filename: string; typeFile: string; size: number; }[] = [];
    const resultdb: any = [];
    files.forEach((file: { originalname: string; filename: string; mimetype: string; size: number; }) => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        typeFile: file.mimetype,
        size: file.size,
        ownerId: user.sub
      };
      const result = this.filesService.createOneFileInDB(fileReponse)
      // Create the corresponding record in DB
      response.push(fileReponse);
      resultdb.push(result);
    });
    return {
      status: HttpStatus.OK,
      message: 'Images uploaded successfully!',
      data: response,
      db: resultdb
    };
  }

  // Download one file
  @Get('file/:filename')
  getFile(@Param('filename') file: string, @Res() res: any) {
    const rootFolder = process.env['FILES_STORAGE_DEST'];
    const response = res.sendFile(file, { root: rootFolder });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }

  // Delete one file and delete the DB record
  @Post('file/deleteonefile/:filename')
  async deleteOneFile(@Param('filename') fileName: string, @I18nLang() lang: string) {
    // File has to be within the right directory (diskstorage directory define in .env)
    // the delete corresponding record in the DB is done in deleteOneFile service
    const response = await this.filesService.deleteOneFile(fileName, lang);
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }

}
