import * as Prisma from '@db/prisma';
import { Address, Organization, User, UserWithBasicRelations, UserWithRelations } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClientService) {}



  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput
    ): Promise<User | null>  {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(options: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) : Promise<UserWithBasicRelations[]> {
    const { skip, take, cursor, where, orderBy } = options;

    const users = await this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        Address: true,
        Orgs: true,
        Followers: {
          include: {
            user: true,
          },
        },
        Followings: {
          include: {
            follower: true,
          },
        },
      },
    });
    return users;
  }

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(options: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User>{
    const { where, data } = options;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }

    async getUserOrganizations(params: { id?: string }): Promise<Organization[]> {
    const { id} = params;

    if (!id) {
      throw new BadRequestException('Either id  must be provided');
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { Orgs: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user.Orgs ?? [];
  }

  async getUserAddresses(userId: string): Promise<Address[]> {
    if (!userId) {
      throw new BadRequestException('userId must be provided');
    }

    const addresses = await this.prisma.address.findMany({
      where: { userId: userId }
    });

    return addresses ?? [];
  }
/*
CRUD for User with all links
*/

/* GET with all links */

async getAllUsersWithAllLinks(): Promise<UserWithRelations[]> {
  const users =  await this.prisma.user.findMany({
    include: {
        manager: true,
        Team: true,
        Profiles: true,
        Groups: true,
        Posts: true,
        Comments: true,
        Stories: true,
        Tasks: true,
        Todo: true,
        TodosAuthor: true,
        TasksAuthor: true,
        Address: true,
        Phones: true,
        Orgs: true,
        Followers: {
          include: {
            user: true,
          },
        },
        Followings: {
          include: {
            follower: true,
          },
        },
        ownedFiles: true,
        uploadedFiles: true,
        profileFiles: true,
        uploadedImages: true,
        profileImages: true,
        ChangesLogs: true,
        posts_liked: true,
      },
  });
  console.log(`[UsersService] getAllUsersWithAllLinks: found ${users.length} users with all links.`);
  return users;
}

async getAllUsersWithBasicLinks(): Promise<UserWithBasicRelations[]> {
  const users =  await this.prisma.user.findMany({
    include: {
      Address: true,
        Orgs: true,
        Followers: {
          include: {
            user: true,
          },
        },
        Followings: {
          include: {
            follower: true,
          },
        },
    },
  });
  console.log(`[UsersService] getAllUsersWithBasicLinks: found ${users.length} users with basic links.`);
  return users;
}


async getOneUserByUniqueWithAllLinks(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<UserWithRelations | null> {
  const user = await this.prisma.user.findUnique({
    where: userWhereUniqueInput,
    include: {
        manager: true,
        Team: true,
        Profiles: true,
        Groups: true,
        Posts: true,
        Comments: true,
        Stories: true,
        Tasks: true,
        Todo: true,
        TodosAuthor: true,
        TasksAuthor: true,
        Address: true,
        Phones: true,
        Orgs: true,
        Followers: {
          include: {
            user: true,
          },
        },
        Followings: {
          include: {
            follower: true,
          },
        },
        ownedFiles: true,
        uploadedFiles: true,
        profileFiles: true,
        uploadedImages: true,
        profileImages: true,
        ChangesLogs: true,
        posts_liked: true,
      },
  })
  return user
}

async getOneUserByUniqueWithBasicLinks(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<UserWithBasicRelations | null> {
  const user = await this.prisma.user.findUnique({
    where: userWhereUniqueInput,
    include: {
      Address: true,
        Orgs: true,
        Followers: {
          include: {
            user: true,
          },
        },
        Followings: {
          include: {
            follower: true,
          },
        },
    },
  })
  return user
}
/*
END End CRUD for User with secret
*/

/*
Specifiques
*/

async findUsersWithParams(params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserMaxOrderByAggregateInput;
  select?: Prisma.UserSelect;
  include?: Prisma.UserInclude;
}): Promise<User[]> {
  const { skip, take, cursor, where, orderBy, include} = params;
  return this.prisma.user.findMany({
    skip,
    take,
    cursor,
    where,
    orderBy,
    include
  });
}

async getOneUserByUnique(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
  return await this.prisma.user.findUnique({
    where: userWhereUniqueInput,
  });
}

async userStillActive(userEmail: string) : Promise<User | null> {
  const userWhereUniqueInput = { email: userEmail }
  const user = await this.getOneUserByUnique(userWhereUniqueInput);
  // Verify the user is not soft deleted !!!
  if( !user) {
    return null;
  }
  if(user?.isDeletedDT != null){ // a date exist witch mean that the user has been soft deleted
    return null; // Soft deleted
  }
  return user
}

async userExistActiveOrNot(userEmail: string): Promise<boolean>{
  const userWhereUniqueInput = { email: userEmail }
  // True or false. If true, user still could have been soft deleted !!
  let result = false;
  const userExist = await this.getOneUserByUnique(userWhereUniqueInput);
  if(userExist != null) {
    result = true
  }
  return result;
}
}

