import {
  Prisma
} from '../generated/prisma/client';

export type PostWithRelations = Prisma.PostGetPayload<{
  include: {
    groups: true;
    owner: true;
    org: true;

    Users: {
      include: {
        user: true,
      },
    },
    LikedBys: {
      include: {
        user: true,
      },
    },
    Comments: true;
    Categories: true;
    Images: true;
    Files: true;
    Tags: true;
  }
}>;
