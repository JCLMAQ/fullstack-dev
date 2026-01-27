import { Prisma, Translation } from '@db/prisma';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { TranslationsService } from './translations.service';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Controller('translations')
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) {}

  @Post()
  async create(@Body() dto: Prisma.TranslationCreateInput): Promise<Translation> {
    try {
      return await this.translationsService.create(dto);
    } catch (error) {
      throw new HttpException(
        `Failed to create translation: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('wordId') wordId?: string,
    @Query('languageId') languageId?: string,
    @Query('text') text?: string,
  ): Promise<Translation[]> {
    try {
      const where: Prisma.TranslationWhereInput = {};

      if (wordId) {
        const parsedWordId = parseInt(wordId, 10);
        if (Number.isNaN(parsedWordId)) {
          throw new HttpException('wordId must be a number', HttpStatus.BAD_REQUEST);
        }
        where.wordId = parsedWordId;
      }

      if (languageId) {
        const parsedLanguageId = parseInt(languageId, 10);
        if (Number.isNaN(parsedLanguageId)) {
          throw new HttpException('languageId must be a number', HttpStatus.BAD_REQUEST);
        }
        where.languageId = parsedLanguageId;
      }

      if (text) {
        where.text = {
          contains: text,
          mode: 'insensitive',
        };
      }

      return await this.translationsService.findAll({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
        where: Object.keys(where).length ? where : undefined,
      });
    } catch (error) {
      throw new HttpException(
        `Failed to fetch translations: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Translation> {
    try {
      return await this.translationsService.findOne(id);
    } catch (error) {
      throw new HttpException(
        `Failed to fetch translation: ${getErrorMessage(error)}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.TranslationUpdateInput,
  ): Promise<Translation> {
    try {
      return await this.translationsService.update(id, dto);
    } catch (error) {
      throw new HttpException(
        `Failed to update translation: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Translation> {
    try {
      return await this.translationsService.remove(id);
    } catch (error) {
      throw new HttpException(
        `Failed to delete translation: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
