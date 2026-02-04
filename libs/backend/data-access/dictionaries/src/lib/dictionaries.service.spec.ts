import { Test } from '@nestjs/testing';
import { DictionariesService } from './dictionaries.service';

describe('DictionariesService', () => {
  let service: DictionariesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DictionariesService],
    }).compile();

    service = module.get(DictionariesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
