import { Prisma, Word } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Injectable()
export class WordsService {
  constructor(private readonly prisma: PrismaClientService) {}

  async create(data: Prisma.WordCreateInput): Promise<Word> {
    try {
      return await this.prisma.word.create({
        data,
        include: {
          translations: {
            include: {
              language: true,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to create word: ${getErrorMessage(error)}`);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.WordWhereInput;
    orderBy?: Prisma.WordOrderByWithRelationInput;
  }): Promise<Word[]> {
    try {
      const { skip, take, where, orderBy } = params;
      return await this.prisma.word.findMany({
        skip,
        take,
        where,
        orderBy: orderBy || { createdAt: 'desc' },
        include: {
          translations: {
            include: {
              language: true,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch words: ${getErrorMessage(error)}`);
    }
  }

  async findOne(id: number): Promise<Word> {
    try {
      const word = await this.prisma.word.findUnique({
        where: { id },
        include: {
          translations: {
            include: {
              language: true,
            },
          },
        },
      });

      if (!word) {
        throw new Error(`Word with ID ${id} not found`);
      }

      return word;
    } catch (error) {
      throw new Error(`Failed to fetch word: ${getErrorMessage(error)}`);
    }
  }

  async findBySlug(slug: string): Promise<Word | null> {
    try {
      return await this.prisma.word.findUnique({
        where: { slug },
        include: {
          translations: {
            include: {
              language: true,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch word by slug: ${getErrorMessage(error)}`);
    }
  }

  async update(id: number, data: Prisma.WordUpdateInput): Promise<Word> {
    try {
      await this.findOne(id);
      return await this.prisma.word.update({
        where: { id },
        data,
        include: {
          translations: {
            include: {
              language: true,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to update word: ${getErrorMessage(error)}`);
    }
  }

  async remove(id: number): Promise<Word> {
    try {
      await this.findOne(id);
      return await this.prisma.word.delete({
        where: { id },
        include: {
          translations: {
            include: {
              language: true,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to delete word: ${getErrorMessage(error)}`);
    }
  }
}
