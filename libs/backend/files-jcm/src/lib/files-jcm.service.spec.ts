import { Test } from '@nestjs/testing';
import { FilesJcmService } from './files-jcm.service';

describe('FilesJcmService', () => {
  let service: FilesJcmService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FilesJcmService],
    }).compile();

    service = module.get(FilesJcmService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
