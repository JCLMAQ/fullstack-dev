import { Prisma, Translation } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Injectable()
export class TranslationsService {
  constructor(private readonly prisma: PrismaClientService) {}

  async create(data: Prisma.TranslationCreateInput): Promise<Translation> {
    try {
      return await this.prisma.translation.create({
        data,
        include: {
          language: true,
          word: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create translation: ${getErrorMessage(error)}`);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.TranslationWhereInput;
    orderBy?: Prisma.TranslationOrderByWithRelationInput;
  }): Promise<Translation[]> {
    try {
      const { skip, take, where, orderBy } = params;
      return await this.prisma.translation.findMany({
        skip,
        take,
        where,
        orderBy: orderBy || { id: 'desc' },
        include: {
          language: true,
          word: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch translations: ${getErrorMessage(error)}`);
    }
  }

  async findOne(id: number): Promise<Translation> {
    try {
      const translation = await this.prisma.translation.findUnique({
        where: { id },
        include: {
          language: true,
          word: true,
        },
      });

      if (!translation) {
        throw new Error(`Translation with ID ${id} not found`);
      }

      return translation;
    } catch (error) {
      throw new Error(`Failed to fetch translation: ${getErrorMessage(error)}`);
    }
  }

  async update(id: number, data: Prisma.TranslationUpdateInput): Promise<Translation> {
    try {
      await this.findOne(id);
      return await this.prisma.translation.update({
        where: { id },
        data,
        include: {
          language: true,
          word: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to update translation: ${getErrorMessage(error)}`);
    }
  }

  async remove(id: number): Promise<Translation> {
    try {
      await this.findOne(id);
      return await this.prisma.translation.delete({
        where: { id },
        include: {
          language: true,
          word: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to delete translation: ${getErrorMessage(error)}`);
    }
  }
}
