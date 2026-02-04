import { Prisma } from '../generated/prisma/client';

export type TaskWithRelations = Prisma.TaskGetPayload<{
  include: {
    Todo: true;
    owner: true;
    org: true;
    groups: true;
    mainTask: true;
    SubTasks: {
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
    Tags: true;

  };
}>;

/*
model Task {
  id          String         @id() @default(uuid(7))
  numSeq      Int            @default(autoincrement())
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @default(now()) @updatedAt()
  published   Boolean        @default(true)
  isDeleted   Int            @default(0)
  isDeletedDT DateTime?
  isPublic    Boolean        @default(false)
  owner       User           @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  ownerId     String
  org         Organization   @relation(fields: [orgId], references: [id], onDelete: Cascade)
  orgId       String
  groups      Group[]
  orderTask   Int
  title       String
  content     String?
  taskState   TaskState      @default(CREATION)
  mainTask    Task?          @relation("MainSubTask", fields: [mainTaskId], references: [id], onDelete: SetNull, onUpdate: Cascade)
  mainTaskId  String?        @map("mainTask")
  SubTasks    Task[]         @relation("MainSubTask")
  Users       UserTaskLink[]
  todo        Todo?          @relation(fields: [todoId], references: [id], onUpdate: Cascade, onDelete: Cascade)
  todoId      String?
  Tags        TagMgt[]       @relation("TaskTags")
}
*/
