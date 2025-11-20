import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@db/prisma';
import { PrismaPgAdapter } from '@prisma/adapter-pg';

const adapter = new PrismaPgAdapter({
  connectionString: process.env.DATABASE_URL!,

});

@Injectable()
export class PrismaClientService extends PrismaClient({ adapter }) implements OnModuleInit, OnModuleDestroy {
  constructor() {
    //   const config: any = {
    //   log: [
    //     { level: 'query', emit: 'event' },
    //     { level: 'error', emit: 'stdout' },
    //     { level: 'info', emit: 'stdout' },
    //     { level: 'warn', emit: 'stdout' },
    //   ],
    // };

    // if (process.env.PRISMA_ACCELERATE_URL) {
    //   config.accelerateUrl = process.env.PRISMA_ACCELERATE_URL;
    // }

    // super(config);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
