import { Module } from '@nestjs/common';
import { UserFollowersController } from './userFollowers.controller';
import { UserFollowersService } from './userFollowers.service';

@Module({
  controllers: [UserFollowersController],
  providers: [UserFollowersService],
  exports: [UserFollowersService],
})
export class UserFollowersModule {}
