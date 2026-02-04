import { Test } from '@nestjs/testing';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  let service: TagsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TagsService],
    }).compile();

    service = module.get(TagsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
