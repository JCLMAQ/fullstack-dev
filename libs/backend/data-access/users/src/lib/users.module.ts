import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  controllers: [],
  providers: [UsersService],
  exports: [UsersService],
  imports: [PrismaClientModule],
})
export class UsersModule {}
