import { PrismaClient } from '@db/prisma-client';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
