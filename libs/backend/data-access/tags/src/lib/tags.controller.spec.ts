import { TagWithRelations } from '@db/prisma';
import { Test } from '@nestjs/testing';
import { CreateTagDto } from './dto/tag.dto';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

describe('TagsController', () => {
  let controller: TagsController;
  let service: jest.Mocked<TagsService>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [
        {
          provide: TagsService,
          useValue: {
            listTags: jest.fn(),
            countTags: jest.fn(),
            getTagById: jest.fn(),
            createTag: jest.fn(),
            updateTag: jest.fn(),
            softDeleteTag: jest.fn(),
            restoreTag: jest.fn(),
            deleteTag: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get(TagsController);
    service = module.get(TagsService) as jest.Mocked<TagsService>;
  });

  it('should aggregate pagination metadata', async () => {
    const tag = { id: 1 } as TagWithRelations;
    service.listTags.mockResolvedValue([tag]);
    service.countTags.mockResolvedValue(1);

    const response = await controller.getTags({ skip: '0', take: '5' });

    expect(response).toEqual({ data: [tag], total: 1, skip: 0, take: 5 });
    expect(service.listTags).toHaveBeenCalledWith(
      expect.objectContaining({ skip: 0, take: 5 })
    );
    expect(service.countTags).toHaveBeenCalledTimes(1);
  });

  it('should proxy creation to service', async () => {
    const payload = { name: 'demo', tagCategoriesId: 1 } as CreateTagDto;
    const created = { id: 10 } as TagWithRelations;
    service.createTag.mockResolvedValue(created);

    const result = await controller.createTag(payload);

    expect(service.createTag).toHaveBeenCalledWith(payload);
    expect(result).toBe(created);
  });
});
