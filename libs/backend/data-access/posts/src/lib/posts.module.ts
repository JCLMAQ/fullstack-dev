import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';

@Module({
  controllers: [],
  providers: [PostsService],
  exports: [PostsService],
  imports: [PrismaClientModule],
})
export class PostsModule {}
