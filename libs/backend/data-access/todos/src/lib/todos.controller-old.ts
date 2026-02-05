// import { Prisma } from '@db/prisma';
// import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
// import { DEFAULT_TODO_SKIP, DEFAULT_TODO_TAKE, TodoListQueryParams, TodoListResponse } from './dto/todo.dto';
// import { TodosService } from './todos.service';

// @Controller('todos')
// export class TodosController {
//   constructor(private readonly todosService: TodosService) {}

//   @Get()
//   async getTodos(@Query() query: TodoListQueryParams): Promise<TodoListResponse> {
//     try {
//       const skip = query.skip ? Number(query.skip) : DEFAULT_TODO_SKIP;
//       const take = query.take ? Number(query.take) : DEFAULT_TODO_TAKE;

//       const where: Prisma.TodoWhereInput = {};

//       if (query.ownerId) {
//         where.ownerId = query.ownerId;
//       }

//       if (query.orgId) {
//         where.orgId = query.orgId;
//       }

//       if (query.search) {
//         where.title = { contains: query.search, mode: 'insensitive' };
//       }

//       const orderBy: Prisma.TodoOrderByWithRelationInput = {};
//       if (query.orderBy) {
//         // Default sort order handling can be added here
//         orderBy[query.orderBy as keyof Prisma.TodoOrderByWithRelationInput] = 'asc';
//       } else {
//         orderBy.createdAt = 'desc';
//       }

//       const [data, total] = await Promise.all([
//         this.todosService.listTodos({
//           skip,
//           take,
//           where,
//           orderBy,
//         }),
//         this.todosService.countTodos(where),
//       ]);

//       return { data, total, skip, take };
//     } catch (error) {
//       throw new HttpException('Error fetching todos', HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }
// }
