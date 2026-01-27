import { Language, Prisma } from '@db/prisma';
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
import { LanguagesService } from './languages.service';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  async create(@Body() dto: Prisma.LanguageCreateInput): Promise<Language> {
    try {
      return await this.languagesService.create(dto);
    } catch (error) {
      throw new HttpException(
        `Failed to create language: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('code') code?: string,
    @Query('name') name?: string,
  ): Promise<Language[]> {
    try {
      const where: Prisma.LanguageWhereInput = {};

      if (code) {
        where.code = {
          contains: code,
          mode: 'insensitive',
        };
      }

      if (name) {
        where.name = {
          contains: name,
          mode: 'insensitive',
        };
      }

      return await this.languagesService.findAll({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
        where: Object.keys(where).length ? where : undefined,
      });
    } catch (error) {
      throw new HttpException(
        `Failed to fetch languages: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Language> {
    try {
      return await this.languagesService.findOne(id);
    } catch (error) {
      throw new HttpException(
        `Failed to fetch language: ${getErrorMessage(error)}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('code/:code')
  async findByCode(@Param('code') code: string): Promise<Language> {
    try {
      const language = await this.languagesService.findByCode(code);
      if (!language) {
        throw new HttpException(`Language with code ${code} not found`, HttpStatus.NOT_FOUND);
      }
      return language;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch language by code: ${getErrorMessage(error)}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.LanguageUpdateInput,
  ): Promise<Language> {
    try {
      return await this.languagesService.update(id, dto);
    } catch (error) {
      throw new HttpException(
        `Failed to update language: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Language> {
    try {
      return await this.languagesService.remove(id);
    } catch (error) {
      throw new HttpException(
        `Failed to delete language: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
