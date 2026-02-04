import { Test } from '@nestjs/testing';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

describe('TagsController', () => {
  let controller: TagsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TagsService],
      controllers: [TagsController],
    }).compile();

    controller = module.get(TagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
