import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { clampPosition } from './navigation.helper';
import {
  applyNavigation,
  EntityWithId,
  NavigationStore,
  resolveIndex,
  resolveSource,
  resolveTargetId,
} from './navigation.updaters';

export type NavigationState = {
  currentPosition: number;
  lastPosition: number;
  navigation: {
    hasNext: boolean;
    hasPrevious: boolean;
    isFirst: boolean;
    isLast: boolean;
  };
};

const initialNavigationState: NavigationState = {
  currentPosition: 0,
  lastPosition: 0,
  navigation: {
    hasNext: false,
    hasPrevious: false,
    isFirst: true,
    isLast: true,
  },
};

export function withNavigationMethods<Entity extends EntityWithId>() {
  return signalStoreFeature(
    withState<NavigationState>(initialNavigationState),
    withMethods((store) => {
      const navStore = store as unknown as NavigationStore<Entity>;
      return {
        initNavButton(initialItemId?: string) {
          const source = resolveSource(navStore);
          const targetId = resolveTargetId(navStore, source, initialItemId);
          const index = resolveIndex(source, targetId);
          applyNavigation(navStore, source, index);
        },
        navStateMgt(currentPosition: number, lastPosition: number) {
          const source = resolveSource(navStore);
          const { current } = clampPosition(currentPosition, Math.max(source.length - 1, lastPosition));
          applyNavigation(navStore, source, current);
        },
        next() {
          const source = resolveSource(navStore);
          const current = resolveIndex(source, navStore.selectedItemId());
          applyNavigation(navStore, source, current + 1);
        },
        last() {
          const source = resolveSource(navStore);
          applyNavigation(navStore, source, source.length - 1);
        },
        first() {
          const source = resolveSource(navStore);
          applyNavigation(navStore, source, 0);
        },
        previous() {
          const source = resolveSource(navStore);
          const current = resolveIndex(source, navStore.selectedItemId());
          applyNavigation(navStore, source, current - 1);
        },
      };
    })
  );
}

