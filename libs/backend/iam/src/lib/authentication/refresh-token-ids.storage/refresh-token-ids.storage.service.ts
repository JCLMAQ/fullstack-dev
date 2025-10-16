import { type Prisma, PrismaClientService, type RefreshToken } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshTokenIdsStorageService {
  constructor(private prisma: PrismaClientService) {}

  async create(data: Prisma.RefreshTokenCreateInput): Promise<RefreshToken> {
    const token = this.prisma.refreshToken.create({ data });
    return token;
  }
}
