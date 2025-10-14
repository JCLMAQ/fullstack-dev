import { CommentsModule } from '@be/comments';
import { PostsModule } from '@be/posts';
import { UsersModule } from '@be/users';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
