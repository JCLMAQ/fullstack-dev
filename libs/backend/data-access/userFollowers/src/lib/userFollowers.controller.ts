import { Controller } from '@nestjs/common';
import { UserFollowersService } from './userFollowers.service';

@Controller('userFollowers')
export class UserFollowersController {
  constructor(private userFollowersService: UserFollowersService) {}
}
