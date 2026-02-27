import { PrismaClient, TagCategories } from '../../generated/prisma/client';

type TagSeedOptions = {
  perCategory?: number;
  colors?: string[];
};

export async function createTagsForCategories(
  prisma: PrismaClient,
  categories: TagCategories[],
  options?: TagSeedOptions
): Promise<void> {
  const perCategory = options?.perCategory ?? 10;
  const colors = options?.colors ?? [];
  let colorIndex = 0;

  for (const category of categories) {
    for (let i = 0; i < perCategory; i++) {
      const name = `Tag ${category.modelName} ${i + 1}`;
      const color = colors.length ? colors[colorIndex++ % colors.length] : null;

      await prisma.tagValue.create({
        data: {
          name,
          tagCategoriesId: category.id,
          position: i,
          color,
          published: true,
          isPublic: true,
        },
      });
    }
  }
}
