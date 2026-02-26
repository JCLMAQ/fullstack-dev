import { withDevtools, withEntityResources } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { withFilter, withPagination, withSort } from '@fe/stores';
import { signalStore, withComputed, withProps, withState } from '@ngrx/signals';
import { TagListItem } from '../models/tag.models';
import { TagService } from '../services/tag-service';
import { initialTagState, TAG_LIST_MAX_TAKE } from './tag-slice';
import { withTagMethods } from './tag-store-methods';
import { withTagMutations } from './tag-updater';

export const TagStore = signalStore(
	withState(initialTagState),
	withProps(() => {
		const _tagService = inject(TagService);
		const _snackBar = inject(MatSnackBar);
		return { _tagService, _snackBar };
	}),
	withDevtools('TagStore'),
	withEntityResources((store) => ({
		tags: store._tagService.getTagsResource(() => ({
			take: TAG_LIST_MAX_TAKE,
			mainTagId: store.mainTagId(),
			includeDeleted: store.includeDeleted(),
		})),
	})),
	withTagMethods(),
	withTagMutations(),
	withComputed((store) => ({
		tags: computed(() => Object.values(store.tagsEntityMap() ?? {})),
		itemsCount: computed(() => Object.keys(store.tagsEntityMap() ?? {}).length),
		isLoading: computed(() => store.tagsIsLoading()),
		hasError: computed(() => !!store.tagsError()),
	})),
	withFilter<TagListItem, 'tags'>({
		collection: 'tags',
		itemsSelector: (store: any) => store.tags(),
		predicate: (tag: TagListItem, filter: string) =>
			tag.name?.toLowerCase().includes(filter) ||
			tag.tagCategories?.modelName?.toLowerCase().includes(filter),
	}),
	withSort<TagListItem, 'tags'>({
		collection: 'tags',
		itemsSelector: (store: any) => store.filteredTags(),
		comparators: {
			name: (a, b) => a.name.localeCompare(b.name),
			position: (a, b) => (a.position ?? 0) - (b.position ?? 0),
			usageCount: (a, b) => a.usageCount - b.usageCount,
			subTagCount: (a, b) => a.subTagCount - b.subTagCount,
			category: (a, b) => a.tagCategories?.modelName?.localeCompare(b.tagCategories?.modelName ?? '') ?? 0,
		},
	}),
	withPagination<TagListItem>({
		itemsSelector: (store: any) => store.sortedTags,
		initialPageSize: 10,
	})
);
