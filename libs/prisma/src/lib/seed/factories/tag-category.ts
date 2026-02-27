import { PrismaClient, TagCategories } from '../../generated/prisma/client';

type TagCategoryOptions = {
  models?: string[];
};

export async function createTagCategories(
  prisma: PrismaClient,
  options?: TagCategoryOptions
): Promise<TagCategories[]> {
  const models = options?.models ?? ['Post', 'Task', 'Todo', 'Group', 'File'];
  const categories: TagCategories[] = [];

  for (const modelName of models) {
    const category = await prisma.tagCategories.create({
      data: {
        modelName,
        recordId: `seed-${modelName.toLowerCase()}`,
        description: `Tags for ${modelName}`,
      },
    });

    categories.push(category);
  }

  return categories;
}
