import { Test } from '@nestjs/testing';
import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ImagesService],
    }).compile();

    service = module.get(ImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
