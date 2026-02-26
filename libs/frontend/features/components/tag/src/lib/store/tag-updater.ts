import { withMutations } from '@angular-architects/ngrx-toolkit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { patchState, signalStoreFeature, type } from '@ngrx/signals';
import { addEntity, EntityId, removeEntity, updateEntity } from '@ngrx/signals/entities';
import type { TagListItem, TagMutationResult } from '../models/tag.models';
import { TagService } from '../services/tag-service';
import { buildTagListItem } from './tag-helper';

export function withTagMutations<_>() {
	return signalStoreFeature(
		{
			state: type<{
				tagsEntityMap: Record<EntityId, TagListItem>;
				tagsIds: EntityId[];
			}>(),
			props: type<{
				_tagService: TagService;
				_snackBar: MatSnackBar;
			}>(),
		},
		withMutations((store) => ({
			createTag: store._tagService.createTagMutation({
				onSuccess: (tag: TagMutationResult) => {
					const listItem = buildTagListItem(tag);
					patchState(store, addEntity(listItem, { collection: 'tags' }));
					store._snackBar.open('Tag created', 'OK');
				},
				onError: (error: unknown) => {
					store._snackBar.open('Error creating tag', 'OK');
					console.error(error);
				},
			}),

			updateTag: store._tagService.updateTagMutation({
				onSuccess: (tag: TagMutationResult) => {
					const current = store.tagsEntityMap()[tag.id];
					const listItem = buildTagListItem(tag, current);
					patchState(store, updateEntity({ id: tag.id, changes: listItem }, { collection: 'tags' }));
					store._snackBar.open('Tag updated', 'OK');
				},
				onError: (error: unknown) => {
					store._snackBar.open('Error updating tag', 'OK');
					console.error(error);
				},
			}),

			softDeleteTag: store._tagService.softDeleteMutation({
				onSuccess: (tag: TagMutationResult) => {
					patchState(store, removeEntity(tag.id, { collection: 'tags' }));
					store._snackBar.open('Tag deleted', 'OK');
				},
				onError: (error: unknown) => {
					store._snackBar.open('Error deleting tag', 'OK');
					console.error(error);
				},
			}),

			hardDeleteTag: store._tagService.hardDeleteMutation({
				onSuccess: (tag: TagMutationResult) => {
					patchState(store, removeEntity(tag.id, { collection: 'tags' }));
					store._snackBar.open('Tag permanently deleted', 'OK');
				},
				onError: (error: unknown) => {
					store._snackBar.open('Error permanently deleting tag', 'OK');
					console.error(error);
				},
			}),
		}))
	);
}
