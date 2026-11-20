import { ConfigParam, Prisma } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

// Helper function for type-safe error handling
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Injectable()
export class ConfigParamsService {
  constructor(private readonly prisma: PrismaClientService) {}

  // Create a new config parameter
  async create(data: Prisma.ConfigParamCreateInput): Promise<ConfigParam> {
    try {
      const db = await this.prisma.getPrisma8();
      const { createdAt, updatedAt, isDeletedDT, ...fields } = data;
      return await db.orm.public.ConfigParam.create({
        ...fields,
        createdAt: typeof createdAt === 'string' ? new Date(createdAt) : createdAt,
        updatedAt: typeof updatedAt === 'string' ? new Date(updatedAt) : updatedAt,
        isDeletedDT: typeof isDeletedDT === 'string' ? new Date(isDeletedDT) : isDeletedDT,
      });
    } catch (error) {
      throw new Error(`Failed to create config parameter: ${getErrorMessage(error)}`);
    }
  }

  // Find all config parameters with optional filtering and pagination
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ConfigParamWhereUniqueInput;
    where?: Prisma.ConfigParamWhereInput;
    orderBy?: Prisma.ConfigParamOrderByWithRelationInput;
    includeDeleted?: boolean;
  }): Promise<ConfigParam[]> {
    try {
      const { skip, take, cursor, where = {}, orderBy, includeDeleted = false } = params;

      // Add soft delete filter unless explicitly including deleted
      if (!includeDeleted) {
        where.isDeleted = 0;
      }

      return await this.prisma.configParam.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy: orderBy || { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch config parameters: ${getErrorMessage(error)}`);
    }
  }

  // Find a config parameter by ID
  async findOne(id: number, includeDeleted = false): Promise<ConfigParam | null> {
    try {
      const db = await this.prisma.getPrisma8();
      const parameter = await db.orm.public.ConfigParam
        .where({ id, ...(includeDeleted ? {} : { isDeleted: 0 }) })
        .first();
      return parameter ?? null;
    } catch (error) {
      throw new Error(`Failed to fetch config parameter: ${getErrorMessage(error)}`);
    }
  }

  // Find a config parameter by name (unique field)
  async findByName(name: string, includeDeleted = false): Promise<ConfigParam | null> {
    try {
      const db = await this.prisma.getPrisma8();
      const parameter = await db.orm.public.ConfigParam
        .where({ name, ...(includeDeleted ? {} : { isDeleted: 0 }) })
        .first();
      return parameter ?? null;
    } catch (error) {
      throw new Error(`Failed to fetch config parameter by name: ${getErrorMessage(error)}`);
    }
  }

  // Update a config parameter
  async update(id: number, data: Prisma.ConfigParamUpdateInput): Promise<ConfigParam> {
    try {
      // Check if parameter exists and is not deleted
      const existing = await this.findOne(id);
      if (!existing) {
        throw new Error('Config parameter not found or is deleted');
      }

      return await this.prisma.configParam.update({
        where: { id },
        data: {
          ...data,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new Error(`Failed to update config parameter: ${getErrorMessage(error)}`);
    }
  }

  // Soft delete a config parameter
  async remove(id: number): Promise<ConfigParam> {
    try {
      const db = await this.prisma.getPrisma8();
      const timestamp = new Date();
      const parameter = await db.orm.public.ConfigParam
        .where({ id, isDeleted: 0 })
        .update({ isDeleted: 1, isDeletedDT: timestamp, updatedAt: timestamp });
      if (!parameter) {
        throw new Error('Config parameter not found or already deleted');
      }
      return parameter;
    } catch (error) {
      throw new Error(`Failed to delete config parameter: ${getErrorMessage(error)}`);
    }
  }

  // Hard delete a config parameter (permanent removal)
  async hardDelete(id: number): Promise<ConfigParam> {
    try {
      const db = await this.prisma.getPrisma8();
      const parameter = await db.orm.public.ConfigParam.where({ id }).delete();
      if (!parameter) {
        throw new Error('Config parameter not found');
      }
      return parameter;
    } catch (error) {
      throw new Error(`Failed to permanently delete config parameter: ${getErrorMessage(error)}`);
    }
  }

  // Restore a soft deleted config parameter
  async restore(id: number): Promise<ConfigParam> {
    try {
      const existing = await this.findOne(id, true);
      if (!existing) {
        throw new Error('Config parameter not found');
      }

      if (existing.isDeleted === 0) {
        throw new Error('Config parameter is not deleted');
      }

      const db = await this.prisma.getPrisma8();
      const parameter = await db.orm.public.ConfigParam
        .where({ id, isDeleted: existing.isDeleted })
        .update({ isDeleted: 0, isDeletedDT: null, updatedAt: new Date() });
      if (!parameter) {
        throw new Error('Config parameter no longer has the expected deletion status');
      }
      return parameter;
    } catch (error) {
      throw new Error(`Failed to restore config parameter: ${getErrorMessage(error)}`);
    }
  }

  // Get parameter value by name (convenience method)
  async getValue(name: string): Promise<string | null> {
    try {
      const param = await this.findByName(name);
      return param?.value || null;
    } catch (error) {
      throw new Error(`Failed to get parameter value: ${getErrorMessage(error)}`);
    }
  }

  // Set parameter value by name (convenience method)
  async setValue(name: string, value: string, utility = ''): Promise<ConfigParam> {
    try {
      const existing = await this.findByName(name);

      if (existing) {
        return await this.update(existing.id, { value, utility });
      } else {
        return await this.create({ name, value, utility });
      }
    } catch (error) {
      throw new Error(`Failed to set parameter value: ${getErrorMessage(error)}`);
    }
  }

  // Find published config parameters
  async findPublished(): Promise<ConfigParam[]> {
    try {
      return await this.findAll({
        where: { published: true },
      });
    } catch (error) {
      throw new Error(`Failed to fetch published config parameters: ${getErrorMessage(error)}`);
    }
  }

  // Find public config parameters
  async findPublic(): Promise<ConfigParam[]> {
    try {
      return await this.findAll({
        where: { isPublic: true },
      });
    } catch (error) {
      throw new Error(`Failed to fetch public config parameters: ${getErrorMessage(error)}`);
    }
  }

  // Search config parameters by name or utility
  async search(query: string): Promise<ConfigParam[]> {
    try {
      return await this.findAll({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { utility: { contains: query, mode: 'insensitive' } },
          ],
        },
      });
    } catch (error) {
      throw new Error(`Failed to search config parameters: ${getErrorMessage(error)}`);
    }
  }

  // Get config parameters by utility
  async findByUtility(utility: string): Promise<ConfigParam[]> {
    try {
      return await this.findAll({
        where: { utility },
      });
    } catch (error) {
      throw new Error(`Failed to fetch config parameters by utility: ${getErrorMessage(error)}`);
    }
  }

  // Toggle published status
  async togglePublished(id: number): Promise<ConfigParam> {
    try {
      const existing = await this.findOne(id);
      if (!existing) {
        throw new Error('Config parameter not found');
      }

      return await this.update(id, {
        published: !existing.published,
      });
    } catch (error) {
      throw new Error(`Failed to toggle published status: ${getErrorMessage(error)}`);
    }
  }

  // Toggle public status
  async togglePublic(id: number): Promise<ConfigParam> {
    try {
      const existing = await this.findOne(id);
      if (!existing) {
        throw new Error('Config parameter not found');
      }

      return await this.update(id, {
        isPublic: !existing.isPublic,
      });
    } catch (error) {
      throw new Error(`Failed to toggle public status: ${getErrorMessage(error)}`);
    }
  }

  // Get config parameters statistics
  async getStats(): Promise<{
    total: number;
    published: number;
    public: number;
    deleted: number;
    utilities: { utility: string; count: number }[];
  }> {
    try {
      const db = await this.prisma.getPrisma8();
      const totalsQuery = db.raw.sql`
        SELECT
          COUNT(*) FILTER (WHERE "isDeleted" = 0) AS total,
          COUNT(*) FILTER (WHERE "isDeleted" = 0 AND published) AS published,
          COUNT(*) FILTER (WHERE "isDeleted" = 0 AND "isPublic") AS "public",
          COUNT(*) FILTER (WHERE "isDeleted" = 1) AS deleted
        FROM "public"."ConfigParam"
      `.returnsRow({ total: 'pg/int8@1', published: 'pg/int8@1', public: 'pg/int8@1', deleted: 'pg/int8@1' }).build();
      const utilitiesQuery = db.raw.sql`
        SELECT utility, COUNT(*) AS count
        FROM "public"."ConfigParam"
        WHERE "isDeleted" = 0
        GROUP BY utility
        ORDER BY count DESC
      `.returnsRow({ utility: 'pg/text@1', count: 'pg/int8@1' }).build();
      const [[totals], utilities] = await Promise.all([db.query(totalsQuery), db.query(utilitiesQuery)]);

      return {
        total: Number(totals.total),
        published: Number(totals.published),
        public: Number(totals.public),
        deleted: Number(totals.deleted),
        utilities: utilities.map(({ utility, count }) => ({ utility, count: Number(count) })),
      };
    } catch (error) {
      throw new Error(`Failed to get config parameters statistics: ${getErrorMessage(error)}`);
    }
  }

  // Bulk update config parameters
  async bulkUpdate(updates: { id: number; data: Prisma.ConfigParamUpdateInput }[]): Promise<ConfigParam[]> {
    try {
      const results = await Promise.all(
        updates.map(({ id, data }) => this.update(id, data))
      );
      return results;
    } catch (error) {
      throw new Error(`Failed to bulk update config parameters: ${getErrorMessage(error)}`);
    }
  }

  // Get config parameters as key-value pairs
  async getAsKeyValuePairs(utility?: string): Promise<Record<string, string>> {
    try {
      const where: Prisma.ConfigParamWhereInput = {};
      if (utility) {
        where.utility = utility;
      }

      const params = await this.findAll({ where });

      return params.reduce((acc, param) => {
        acc[param.name] = param.value;
        return acc;
      }, {} as Record<string, string>);
    } catch (error) {
      throw new Error(`Failed to get config parameters as key-value pairs: ${getErrorMessage(error)}`);
    }
  }
}
