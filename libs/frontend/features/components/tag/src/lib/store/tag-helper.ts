import type { TagListItem, TagMutationResult } from '../models/tag.models';

export function buildTagListItem(tag: TagMutationResult, current?: TagListItem): TagListItem {
	const subTagCount = tag.SubTags?.length ?? current?.subTagCount ?? 0;
	const usageCount =
		(tag.Todos?.length ?? 0) +
		(tag.Tasks?.length ?? 0) +
		(tag.Groups?.length ?? 0) +
		(tag.Posts?.length ?? 0) +
		(tag.Files?.length ?? 0);

	return {
		id: tag.id,
		createdAt: tag.createdAt,
		updatedAt: tag.updatedAt,
		published: tag.published,
		isPublic: tag.isPublic,
		isDeleted: tag.isDeleted,
		isDeletedDT: tag.isDeletedDT,
		name: tag.name,
		color: tag.color ?? current?.color ?? null,
		position: tag.position,
		tagCategoriesId: tag.tagCategoriesId,
		mainTagId: tag.mainTagId ?? null,
		tagCategories: tag.tagCategories,
		usageCount,
		subTagCount,
	};
}
