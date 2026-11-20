import { Language, Prisma } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Injectable()
export class LanguagesService {
  constructor(private readonly prisma: PrismaClientService) {}

  async create(data: Prisma.LanguageCreateInput): Promise<Language> {
    try {
      return await this.prisma.language.create({
        data,
      });
    } catch (error) {
      throw new Error(`Failed to create language: ${getErrorMessage(error)}`);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithRelationInput;
  }): Promise<Language[]> {
    try {
      const { skip, take, where, orderBy } = params;
      return await this.prisma.language.findMany({
        skip,
        take,
        where,
        orderBy: orderBy || { name: 'asc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch languages: ${getErrorMessage(error)}`);
    }
  }

  async findOne(id: number): Promise<Language> {
    try {
      const db = await this.prisma.getPrisma8();
      const language = await db.orm.public.Language.where({ id }).first();

      if (!language) {
        throw new Error(`Language with ID ${id} not found`);
      }

      return language;
    } catch (error) {
      throw new Error(`Failed to fetch language: ${getErrorMessage(error)}`);
    }
  }

  async update(id: number, data: Prisma.LanguageUpdateInput): Promise<Language> {
    try {
      await this.findOne(id);
      return await this.prisma.language.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update language: ${getErrorMessage(error)}`);
    }
  }

  async remove(id: number): Promise<Language> {
    try {
      const db = await this.prisma.getPrisma8();
      const language = await db.orm.public.Language.where({ id }).delete();
      if (!language) {
        throw new Error(`Failed to fetch language: Language with ID ${id} not found`);
      }
      return language;
    } catch (error) {
      throw new Error(`Failed to delete language: ${getErrorMessage(error)}`);
    }
  }

  async findByCode(code: string): Promise<Language | null> {
    try {
      const db = await this.prisma.getPrisma8();
      return (await db.orm.public.Language.where({ code }).first()) ?? null;
    } catch (error) {
      throw new Error(`Failed to fetch language by code: ${getErrorMessage(error)}`);
    }
  }
}
