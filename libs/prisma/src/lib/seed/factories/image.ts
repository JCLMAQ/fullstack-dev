import { faker } from '@faker-js/faker';
import { Prisma, PrismaClient } from '../../generated/prisma/client';

export const dataImage = (
  associated_id: string,
  associationType: string,
  sequence = 0
): Prisma.ImageCreateInput => {
  const filename = faker.system.fileName({ extensionCount: 1 });
  return {
    associationType,
    associatedId: associated_id,
    sequence,
    filename,
    originalName: filename,
    mimeType: 'image/jpeg',
    fileSize: faker.number.int({ min: 10000, max: 500000 }),
    width: faker.number.int({ min: 100, max: 2000 }),
    height: faker.number.int({ min: 100, max: 2000 }),
    storageUrl:
      faker.image.avatar() +
      // This is make sure the browser doesn't just retrieve the image from cache
      "/?random=" +
      Math.ceil(Math.random() * 10000),
  };
};


export const createImage = async (i: number, associated_id: string, type: string, sequence: number) => {
  console.log("Image: ", i)
      const image = await prisma.image.create({
        data: {
          associated_id,
          type,
          sequence,
          url: faker.image.avatar() + "/?random=" + Math.ceil(Math.random() * 10000),
        // This is make sure the browser doesn't just retrieve the image from cache

        }
      });

      return image
    }
