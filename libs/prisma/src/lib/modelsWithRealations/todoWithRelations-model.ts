import {
  Prisma
} from '../generated/prisma/client';

export type TodoWithRelations = Prisma.TodoGetPayload<{
  include: {
    groups: true;
    // tasks: true;
    owner: true;

    org: true;
    mainTodo: true;
    // user: true

    SubTodos: {
      include: {
        owner: true;
        Users: {
          include: {
            user: true,
          },
        },
      },
    },
    Users: {
      include: {
        user: true,
      },
    },
    Tasks: true;
    Tags: true;
  }
}>;
