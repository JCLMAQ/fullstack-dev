import { Test } from '@nestjs/testing';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

describe('ImagesController', () => {
  let controller: ImagesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ImagesService],
      controllers: [ImagesController],
    }).compile();

    controller = module.get(ImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
