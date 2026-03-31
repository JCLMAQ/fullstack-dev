import { withDevtools, withEntityResources, withUndoRedo } from '@angular-architects/ngrx-toolkit';
import { computed, effect, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostWithRelations } from '@db/prisma/frontend';
import { AppStore, buildSelectionComputed, withFilter, withNavigationMethods, withPagination, withSelectionFeature, withSort } from '@fe/stores';
import { patchState, signalStore, type, withComputed, withHooks, withProps, withState } from '@ngrx/signals';
import { entityConfig } from '@ngrx/signals/entities';
import { PostService } from '../services/post-service';
import { initialPostState } from './post-state';
import { withPostMethods } from './post-store-methods';
import { withPostMutations } from './post-store-mutations';

const postConfig = entityConfig({
  entity: type<PostWithRelations>(),
  collection: 'posts',
  selectId: (post: PostWithRelations) => post.id,
});

export const PostStore = signalStore(
  withState(initialPostState),
  withProps((_ ) => {
    const _postServices = inject(PostService);
    const _snackBar = inject(MatSnackBar);
    const _appStore = inject(AppStore);

    return {
      _postServices,
      _snackBar,
      _appStore,
    };
  }),
  withDevtools('PostStore'),
  withEntityResources((store) => ({
    posts: store._postServices.getPostsByUserIdOrOrgIdResource(
      store._appStore.user()?.id!,
      store._appStore.orgId() ?? null
    ),
  })),
  withPostMethods(),
  withSelectionFeature<PostWithRelations>({ collection: 'posts' }),
  withNavigationMethods(),
  withPostMutations(),
  withUndoRedo({
    collections: [postConfig.collection],
  }),
  withComputed((store) => {
    const { selection, isAllSelected } = buildSelectionComputed<PostWithRelations>(store, 'postsEntityMap');
    return {
      selection,
      isAllSelected,
      itemsCount: computed(() => Object.keys(store.postsEntityMap()).length),
      posts: computed(() => Object.values(store.postsEntityMap())),
      isLoading: computed(() => store.postsIsLoading()),
      hasError: computed(() => !!store.postsError()),
    };
  }),
  withFilter<PostWithRelations, 'posts'>({
    collection: 'posts',
    itemsSelector: (store: any) => store.posts(),
    predicate: (post: PostWithRelations, filter: string) =>
      Boolean(post.title?.toLowerCase().includes(filter) || post.content?.toLowerCase().includes(filter)),
  }),
  withSort<PostWithRelations>({
    itemsSelector: (store: any) => store.filteredPosts(),
    comparators: {
      createdAt: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      updatedAt: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
      title: (a, b) => a.title.localeCompare(b.title),
      numSeq: (a, b) => (a.numSeq ?? 0) - (b.numSeq ?? 0),
    },
  }),
  withPagination<PostWithRelations>({
    itemsSelector: (store: any) => store.sortedItems,
    initialPageSize: 10,
  }),
  withHooks({
    onInit: (store) => {
      effect(() => {
        const selected = store.selectedIds();
        const effective = store.effectiveSelectedIds();
        if (effective.length !== selected.length) {
          patchState(store, { effectiveSelectedIds: selected });
        }
      });
    },
  })
);
