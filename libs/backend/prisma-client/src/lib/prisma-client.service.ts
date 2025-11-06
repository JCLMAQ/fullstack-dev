import { PrismaClient } from '@fullstack-dev/prisma';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
