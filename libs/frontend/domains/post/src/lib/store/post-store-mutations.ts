import { withMutations } from '@angular-architects/ngrx-toolkit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostWithRelations } from '@db/prisma/frontend';
import { patchState, signalStoreFeature, type } from '@ngrx/signals';
import { addEntity, EntityId, removeEntity, updateEntity } from '@ngrx/signals/entities';
import { PostService } from '../services/post-service';

export function withPostMutations<_>() {
  const _unused = undefined as unknown as _;
  void _unused;
  return signalStoreFeature(
    {
      state: type<{
        selectedIds: string[];
        effectiveSelectedIds: string[];
        postsEntityMap: Record<EntityId, PostWithRelations>;
        postsIds: EntityId[];
      }>(),
      props: type<{
        _postServices: PostService;
        _snackBar: MatSnackBar;
      }>(),
    },
    withMutations((store) => ({
      savePost: store._postServices.createSavePostMutation({
        onSuccess: (post: PostWithRelations) => {
          const exists = !!store.postsEntityMap()[post.id];
          const entityUpdate = exists
            ? updateEntity({ id: post.id, changes: post }, { collection: 'posts' })
            : addEntity(post, { collection: 'posts' });

          const stateUpdate = exists
            ? { selectedItemId: post.id }
            : {
                selectedItemId: post.id,
                selectedIds: store.selectedIds().includes(post.id)
                  ? store.selectedIds()
                  : [...store.selectedIds(), post.id],
                effectiveSelectedIds: store.effectiveSelectedIds().includes(post.id)
                  ? store.effectiveSelectedIds()
                  : [...store.effectiveSelectedIds(), post.id],
              };

          patchState(store, entityUpdate, stateUpdate);
          store._snackBar.open('Post saved', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error saving post!', 'OK');
          console.error(error);
        },
      }),

      softDeletePost: store._postServices.softDeleteMutation({
        onSuccess: (post: PostWithRelations) => {
          patchState(store, removeEntity(post.id, { collection: 'posts' }));
          store._snackBar.open('Post deleted', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error deleting post!', 'OK');
          console.error(error);
        },
      }),

      hardDeletePost: store._postServices.hardDeleteMutation({
        onSuccess: (post: PostWithRelations) => {
          patchState(store, removeEntity(post.id, { collection: 'posts' }));
          store._snackBar.open('Post permanently deleted', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error permanently deleting post!', 'OK');
          console.error(error);
        },
      }),
    }))
  );
}
