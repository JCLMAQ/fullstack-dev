import { Test } from '@nestjs/testing';
import { FilesJcmController } from './files-jcm.controller';
import { FilesJcmService } from './files-jcm.service';

describe('FilesJcmController', () => {
  let controller: FilesJcmController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FilesJcmService],
      controllers: [FilesJcmController],
    }).compile();

    controller = module.get(FilesJcmController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
