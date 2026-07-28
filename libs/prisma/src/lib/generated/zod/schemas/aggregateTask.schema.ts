import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskCountAggregateInputObjectSchema as TaskCountAggregateInputObjectSchema } from './objects/TaskCountAggregateInput.schema';
import { TaskMinAggregateInputObjectSchema as TaskMinAggregateInputObjectSchema } from './objects/TaskMinAggregateInput.schema';
import { TaskMaxAggregateInputObjectSchema as TaskMaxAggregateInputObjectSchema } from './objects/TaskMaxAggregateInput.schema';
import { TaskAvgAggregateInputObjectSchema as TaskAvgAggregateInputObjectSchema } from './objects/TaskAvgAggregateInput.schema';
import { TaskSumAggregateInputObjectSchema as TaskSumAggregateInputObjectSchema } from './objects/TaskSumAggregateInput.schema';

export const TaskAggregateSchema: z.ZodType<Prisma.TaskAggregateArgs> = z.object({ orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TaskCountAggregateInputObjectSchema ]).optional(), _min: TaskMinAggregateInputObjectSchema.optional(), _max: TaskMaxAggregateInputObjectSchema.optional(), _avg: TaskAvgAggregateInputObjectSchema.optional(), _sum: TaskSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskAggregateArgs>;

export const TaskAggregateZodSchema = z.object({ orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TaskCountAggregateInputObjectSchema ]).optional(), _min: TaskMinAggregateInputObjectSchema.optional(), _max: TaskMaxAggregateInputObjectSchema.optional(), _avg: TaskAvgAggregateInputObjectSchema.optional(), _sum: TaskSumAggregateInputObjectSchema.optional() }).strict();