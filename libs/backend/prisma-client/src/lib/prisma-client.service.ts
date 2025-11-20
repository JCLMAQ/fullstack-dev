import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@db/prisma';

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
      const config: any = {
      log: [
        { level: 'query', emit: 'event' },
        { level: 'error', emit: 'stdout' },
        { level: 'info', emit: 'stdout' },
        { level: 'warn', emit: 'stdout' },
      ],
    };

    if (process.env.PRISMA_ACCELERATE_URL) {
      config.accelerateUrl = process.env.PRISMA_ACCELERATE_URL;
    }

    super(config);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
