import { PrismaClient } from '@db/prisma/client';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import type { Contract } from '../../../../prisma/src/lib/generated/contract/contract.d';

const connectionString = process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres';
const adapter = new PrismaPg({ connectionString });

async function createPrisma8Client() {
  const [{ default: postgres }, { contractFromJson }, { default: contractJson }] = await Promise.all([
    import('@prisma/orm-postgres/runtime'),
    import('@prisma/orm-postgres/static'),
    import('../../../../prisma/src/lib/generated/contract/contract.json', { with: { type: 'json' } }),
  ]);
  return postgres({ contract: contractFromJson<Contract>(contractJson), url: connectionString });
}

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private prisma8Client?: ReturnType<typeof createPrisma8Client>;

  constructor() {
    super({ adapter });
  }

  getPrisma8() {
    this.prisma8Client ??= createPrisma8Client().catch((error: unknown) => {
      this.prisma8Client = undefined;
      throw error;
    });
    return this.prisma8Client;
  }

  async onModuleInit() {
    try {
        await this.$connect();
        console.log('✅ Prisma connected to database');
      } catch (error) {
        console.error('❌ Failed to connect to database:', error);
        throw error;
      }
  }

  async onModuleDestroy() {
    await Promise.all([
      this.$disconnect(),
      this.prisma8Client?.then((client) => client.close(), () => undefined),
    ]);
  }
}
