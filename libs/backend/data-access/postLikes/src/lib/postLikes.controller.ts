import { Controller } from '@nestjs/common';
import { PostLikesService } from './postLikes.service';

@Controller('postLikes')
export class PostLikesController {
  constructor(private postLikesService: PostLikesService) {}
}
