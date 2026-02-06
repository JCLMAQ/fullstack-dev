import { TodoState, TodoWithRelations } from '@db/prisma';
import { Type } from 'class-transformer';
import {
    Allow,
    IsBoolean,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Min,
    ValidateIf,
} from 'class-validator';

export class SaveTodoDto {
  @IsOptional()
  @IsString()
  id?: string;

  @ValidateIf((dto) => !dto.id)
  @IsString()
  @IsNotEmpty()
  ownerId!: string;

  @ValidateIf((dto) => !dto.id)
  @IsString()
  @IsNotEmpty()
  orgId!: string;

  @ValidateIf((dto) => !dto.id)
  @Type(() => Number)
  @IsInt()
  @Min(0)
  orderTodo!: number;

  @ValidateIf((dto) => !dto.id)
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @IsOptional()
  @IsEnum(TodoState)
  todoState?: TodoState;

  @IsOptional()
  @IsString()
  mainTodoId?: string;

  @IsOptional()
  @Allow()
  owner?: unknown;

  @IsOptional()
  @Allow()
  org?: unknown;

  @IsOptional()
  @Allow()
  Users?: unknown;

  @IsOptional()
  @Allow()
  SubTodos?: unknown;

  @IsOptional()
  @Allow()
  Tasks?: unknown;

  @IsOptional()
  @Allow()
  Tags?: unknown;

  @IsOptional()
  @Allow()
  groups?: unknown;
}

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  ownerId?: string;

  @IsOptional()
  @IsString()
  orgId?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  orderTodo?: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @IsOptional()
  @IsEnum(TodoState)
  todoState?: TodoState;

  @IsOptional()
  @IsString()
  mainTodoId?: string;

  @IsOptional()
  @Allow()
  owner?: unknown;

  @IsOptional()
  @Allow()
  org?: unknown;

  @IsOptional()
  @Allow()
  Users?: unknown;

  @IsOptional()
  @Allow()
  SubTodos?: unknown;

  @IsOptional()
  @Allow()
  Tasks?: unknown;

  @IsOptional()
  @Allow()
  Tags?: unknown;

  @IsOptional()
  @Allow()
  groups?: unknown;
}

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
