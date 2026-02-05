import { TodoWithRelations } from '@db/prisma';

export interface TodoListResponse {
  data: TodoWithRelations[];
  total: number;
  skip: number;
  take: number;
}

export interface TodoListQueryParams {
  skip?: string;
  take?: string;
  search?: string;
  ownerId?: string;
  orgId?: string;
  orderBy?: string;
}

export const DEFAULT_TODO_SKIP = 0;
export const DEFAULT_TODO_TAKE = 20;
