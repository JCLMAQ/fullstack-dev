import {
  Prisma
} from './generated/prisma/client';

export type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    manager: true;
    Team: true;
    Profiles: true;
    Groups: true;
    Posts: true;
    Comments: true;
    Stories: true;
    Tasks: true;
    Todo: true;
    TodosAuthor: true;
    TasksAuthor: true;
    Address: true;
    Phones: true;
    Orgs: true;
    Followers: {
      include: {
        // user: true;
        follower: true;
      };
    };
    Followings: {
      include: {
        // follower: true;
        user: true;
      };
    };
    ownedFiles: true;
    uploadedFiles: true;
    profileFiles: true;
    uploadedImages: true;
    profileImages: true;
    ChangesLogs: true;
    posts_liked: true;
  };
}>;

export type UserWithBasicRelations = Prisma.UserGetPayload<{
  include: {
    Address: true;
    Orgs: true;
    Followers: {
      include: {
        // user: true;
        follower: true;
      };
    };
    Followings: {
      include: {
      // follower: true;
        user: true;
      };
    };
  };
}>;
