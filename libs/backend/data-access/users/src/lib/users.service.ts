import * as Prisma from '@db/prisma';
import { Organization, User } from '@db/prisma';
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
  }) : Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = options;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
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
}

