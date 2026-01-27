import { DictioEntryType, Prisma, Word } from '@db/prisma';
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
import { WordsService } from './words.service';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  async create(@Body() dto: Prisma.WordCreateInput): Promise<Word> {
    try {
      return await this.wordsService.create(dto);
    } catch (error) {
      throw new HttpException(
        `Failed to create word: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('slug') slug?: string,
    @Query('type') type?: string,
  ): Promise<Word[]> {
    try {
      const where: Prisma.WordWhereInput = {};

      if (slug) {
        where.slug = {
          contains: slug,
          mode: 'insensitive',
        };
      }

      if (type) {
        const allowedTypes = Object.values(DictioEntryType);
        if (!allowedTypes.includes(type as DictioEntryType)) {
          throw new HttpException(
            `Invalid type. Allowed values: ${allowedTypes.join(', ')}`,
            HttpStatus.BAD_REQUEST,
          );
        }
        where.type = type as DictioEntryType;
      }

      return await this.wordsService.findAll({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
        where: Object.keys(where).length ? where : undefined,
      });
    } catch (error) {
      throw new HttpException(
        `Failed to fetch words: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Word> {
    try {
      return await this.wordsService.findOne(id);
    } catch (error) {
      throw new HttpException(
        `Failed to fetch word: ${getErrorMessage(error)}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string): Promise<Word> {
    try {
      const word = await this.wordsService.findBySlug(slug);
      if (!word) {
        throw new HttpException(`Word with slug ${slug} not found`, HttpStatus.NOT_FOUND);
      }
      return word;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch word by slug: ${getErrorMessage(error)}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.WordUpdateInput,
  ): Promise<Word> {
    try {
      return await this.wordsService.update(id, dto);
    } catch (error) {
      throw new HttpException(
        `Failed to update word: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Word> {
    try {
      return await this.wordsService.remove(id);
    } catch (error) {
      throw new HttpException(
        `Failed to delete word: ${getErrorMessage(error)}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
