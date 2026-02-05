import { TagWithRelations } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  let service: TagsService;
  let prisma: jest.Mocked<PrismaClientService>;

  beforeEach(() => {
    prisma = {
      tagValue: {
        findMany: jest.fn(),
        count: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      tagTranslate: {
        deleteMany: jest.fn(),
        createMany: jest.fn(),
      },
      $transaction: jest.fn(),
    } as unknown as jest.Mocked<PrismaClientService>;

    service = new TagsService(prisma);
  });

  it('throws when tag is missing', async () => {
    prisma.tagValue.findUnique.mockResolvedValue(null);
    await expect(service.getTagById(1)).rejects.toBeInstanceOf(NotFoundException);
  });

  it('soft deletes a tag by toggling flags', async () => {
    const existing = { id: 2, isDeleted: 0 } as TagWithRelations;
    const deleted = { id: 2, isDeleted: 1 } as TagWithRelations;
    prisma.tagValue.findUnique.mockResolvedValueOnce(existing);
    prisma.tagValue.update.mockResolvedValueOnce(deleted);

    const result = await service.softDeleteTag(2);

    expect(prisma.tagValue.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 2 },
        data: expect.objectContaining({ isDeleted: 1 }),
      })
    );
    expect(result).toBe(deleted);
  });

  it('prevents restoring a non-deleted tag', async () => {
    const existing = { id: 3, isDeleted: 0 } as TagWithRelations;
    prisma.tagValue.findUnique.mockResolvedValue(existing);

    await expect(service.restoreTag(3)).rejects.toBeInstanceOf(
      BadRequestException
    );
    expect(prisma.tagValue.update).not.toHaveBeenCalled();
  });
});
