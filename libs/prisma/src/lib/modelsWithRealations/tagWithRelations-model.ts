import { Prisma } from '../generated/prisma/client';

export type TagWithRelations = Prisma.TagValueGetPayload<{
  include: {
    tagCategories: true;
    tagTranslates: {
      include: {
        language: true;
      };
    };
    mainTag: true;
    SubTags: {
      include: {
        tagCategories: true;
        tagTranslates: true;
      };
    };
    Todos: true;
    Tasks: true;
    Groups: true;
    Posts: true;
    Files: true;
  };
}>;






/*
// Tag management models for categorizing and labeling various entities
// TagValue: Represents individual tags which are linked to models (Todos, Tasks, Groups, Posts, Files ).
// TagCartegories: Defines types or categories of tags.
// TagTranslate: Provides multilingual translations for tags.
model TagValue {
model TagValue {
  id              Int             @id() @default(autoincrement())
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @default(now()) @updatedAt()
  published       Boolean         @default(true)
  isPublic        Boolean         @default(true)
  isDeleted       Int             @default(0)
  isDeletedDT     DateTime?
  name            String          @unique()
  position        Int             @default(0) // Position in the list of tags  value for ordering
  tagCategories   TagCategories      @relation(fields: [tagCategoriesId], references: [id])
  tagCategoriesId    Int
  tagTranslates   TagTranslate[]
  Todos           Todo[]          @relation("TodoTags")
  mainTag         TagValue        @relation("MainSubTag", fields: [mainTagId], references: [id], onDelete: SetNull, onUpdate: Cascade)
  mainTagId        Int?           @map("mainTag")
  SubTags         TagValue[]      @relation("MainSubTag")
  Tasks           Task[]          @relation("TaskTags")
  Groups          Group[]         @relation("GroupTags")
  Posts           Post[]          @relation("PostTags")
  Files           File[]          @relation("FilesTags")
}

model TagCategories {
  id          Int       @id() @default(autoincrement())
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @default(now()) @updatedAt()
  published   Boolean   @default(true)
  isPublic    Boolean   @default(true)
  isDeleted   Int       @default(0)
  isDeletedDT DateTime?
  modelName   String
  description String?
  recordId    String
  TagValues   TagValue[]
}

model TagTranslate { // Use TAG type in Word model
  id          Int      @id() @default(autoincrement())
  createdAt   DateTime @default(now())
  updatedAt   DateTime @default(now()) @updatedAt()
  language    Language @relation(fields: [languageId], references: [id])
  languageId  Int
  translation String
  tagId       Int
  tagValue    TagValue   @relation(fields: [tagId], references: [id])
  description String?
}
*/
