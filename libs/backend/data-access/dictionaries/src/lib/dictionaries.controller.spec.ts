import { Test } from '@nestjs/testing';
import { DictionariesController } from './dictionaries.controller';
import { DictionariesService } from './dictionaries.service';

describe('DictionariesController', () => {
  let controller: DictionariesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DictionariesService],
      controllers: [DictionariesController],
    }).compile();

    controller = module.get(DictionariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
