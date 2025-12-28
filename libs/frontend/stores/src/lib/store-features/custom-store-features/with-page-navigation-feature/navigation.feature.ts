import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';

/**
 * État de navigation pour parcourir une liste d'éléments
 * @property currentPosition - Position actuelle dans la liste (index)
 * @property lastPosition - Dernière position disponible (length - 1)
 * @property selectedId - ID de l'élément actuellement sélectionné
 * @property navigation - Indicateurs de navigation (next, previous, first, last)
 */
export type NavigationState = {
  currentPosition: number;
  lastPosition: number;
  selectedId: string | null;
  navigation: {
    hasNext: boolean;
    hasPrevious: boolean;
    isFirst: boolean;
    isLast: boolean;
  };
};

/**
 * Configuration pour la feature de navigation
 * @property selectId - Fonction optionnelle pour extraire l'ID d'un élément
 */
export type NavigationConfig<Item> = {
  selectId?: (item: Item) => string;
};

/**
 * Type représentant une sélection d'éléments (compatible avec SelectionModel)
 */
type SelectionLike<Item> = {
  isEmpty?: () => boolean;
  selected: Item[];
};

/** Type pour un store pouvant être patché */
type PatchableStore = Parameters<typeof patchState>[0];

/**
 * Type pour un store avec capacités de navigation
 * Étend PatchableStore avec les propriétés et méthodes nécessaires
 *
 * @requires items - Signal obligatoire fourni par le store parent (liste complète des éléments)
 * @optional selection - Signal optionnel pour la gestion de sélections multiples
 */
type NavigationStore<Item> = PatchableStore & {
  currentPosition: () => number;
  lastPosition: () => number;
  items?: () => Item[];
  selection?: () => SelectionLike<Item>;
  selectedId?: () => string | null;
};

/** État initial de la navigation */
const initialNavigationState: NavigationState = {
  currentPosition: 0,
  lastPosition: 0,
  selectedId: null,
  navigation: {
    hasNext: false,
    hasPrevious: false,
    isFirst: true,
    isLast: true,
  },
};

/**
 * Restreint une position dans les limites valides [0, last]
 * @param current - Position courante à valider
 * @param last - Position maximale autorisée
 * @returns Positions sécurisées et normalisées
 */
function clampPosition(current: number, last: number) {
  const safeLast = Math.max(last, 0);
  const safeCurrent = Math.min(Math.max(current, 0), safeLast);
  return { current: safeCurrent, last: safeLast };
}

/**
 * Calcule les indicateurs de navigation basés sur la position actuelle
 * @param current - Position actuelle
 * @param last - Dernière position
 * @returns Objet avec les indicateurs hasNext, hasPrevious, isFirst, isLast
 */
function computeNavigation(current: number, last: number) {
  return {
    hasNext: current < last,
    hasPrevious: current > 0,
    isFirst: current === 0,
    isLast: current === last,
  };
}

/**
 * Applique l'état de navigation au store
 * Met à jour la position courante, dernière position et les indicateurs
 * @param store - Store à mettre à jour
 * @param current - Nouvelle position courante
 * @param last - Nouvelle dernière position
 */
function applyNavigationState(store: PatchableStore, current: number, last: number) {
  const navigation = computeNavigation(current, last);
  patchState(store, { currentPosition: current, lastPosition: last, navigation });
}

/**
 * Feature NgRx Signals Store pour la navigation dans une liste d'éléments
 *
 * Fournit des méthodes pour naviguer (next, previous, first, last) dans une collection
 * Gère automatiquement les états de navigation (hasNext, hasPrevious, etc.)
 * Compatible avec les sélections multiples via SelectionModel
 *
 * @template Item - Type des éléments de la liste (doit avoir une propriété id)
 *
 * @requires Le store parent DOIT fournir SOIT :
 * - Un signal `items()` retournant Item[]
 * - Un signal `*Entities()` (EntityMap) qui sera automatiquement converti en Item[]
 *
 * @example Avec entities (auto-détection)
 * ```ts
 * export const UserStore = signalStore(
 *   withEntities({ collection: 'users' }),
 *   withNavigationMethods<User>()  // Utilise usersEntities() automatiquement
 * );
 * ```
 *
 * @example Avec items computed
 * ```ts
 * export const MyStore = signalStore(
 *   withState({ items: [] }),
 *   withComputed(() => ({ items: computed(() => [...]) })),
 *   withNavigationMethods<MyItem>()
 * );
 * ```
 */
export function withNavigationMethods<Item extends { id: string }>(config: NavigationConfig<Item> = {}) {
  const getId = config.selectId ?? ((item: Item) => item.id);

  return signalStoreFeature(
    withState<NavigationState>(initialNavigationState),
    withMethods((store) => ({
      /**
       * Initialise les boutons de navigation avec un élément sélectionné
       * Détermine automatiquement la source (sélection ou liste complète)
       * Détecte automatiquement items() ou *Entities() dans le store
       *
       * @param initialItemId - ID de l'élément initial à sélectionner
       */
      initNavButton(initialItemId: string) {
        const navStore = store as NavigationStore<Item>;
        const selection = navStore.selection?.();

        // Détermine si on a une sélection active
        const hasSelection = selection
          ? typeof selection.isEmpty === 'function'
            ? !selection.isEmpty()
            : selection.selected.length > 0
          : false;

        // Récupère la liste complète : items() ou conversion depuis *Entities()
        let allItems: Item[] = [];
        if (navStore.items) {
          allItems = navStore.items();
        } else {
          // Cherche un signal *Entities() dans le store
          const entitiesKey = Object.keys(navStore).find(key => key.endsWith('Entities'));
          if (entitiesKey) {
            const entities = (navStore as any)[entitiesKey]();
            allItems = Object.values(entities);
          }
        }

        // Utilise la sélection si disponible, sinon la liste complète
        const source: Item[] = hasSelection && selection ? selection.selected : allItems;

        // Trouve la position de l'élément initial
        let currentPosition = source.findIndex((item) => getId(item) === initialItemId);
        if (currentPosition === -1) currentPosition = 0;

        let lastPosition = source.length - 1;
        if (lastPosition < 0) lastPosition = 0;

        const { current, last } = clampPosition(currentPosition, lastPosition);
        applyNavigationState(store, current, last);
        patchState(store, { selectedId: initialItemId });
      },

      /**
       * Gère manuellement l'état de navigation avec des positions spécifiques
       * Utile pour synchroniser la navigation avec un état externe
       *
       * @param currentPosition - Nouvelle position courante
       * @param lastPosition - Nouvelle dernière position
       */
      navStateMgt(currentPosition: number, lastPosition: number) {
        const { current, last } = clampPosition(currentPosition, lastPosition);
            applyNavigationState(store, current, last);
      },

      /**
       * Navigue vers l'élément suivant
       * Ne fait rien si déjà sur le dernier élément
       */
      next() {
        const navStore = store as NavigationStore<Item>;
        const { current, last } = clampPosition(navStore.currentPosition() + 1, navStore.lastPosition());
        applyNavigationState(store, current, last);
      },

      /**
       * Navigue vers le dernier élément de la liste
       */
      last() {
        const navStore = store as NavigationStore<Item>;
        const last = navStore.lastPosition();
        applyNavigationState(store, last, last);
      },

      /**
       * Navigue vers le premier élément de la liste
       */
      first() {
        const navStore = store as NavigationStore<Item>;
        const last = navStore.lastPosition();
        applyNavigationState(store, 0, last);
      },

      /**
       * Navigue vers l'élément précédent
       * Ne fait rien si déjà sur le premier élément
       */
      previous() {
        const navStore = store as NavigationStore<Item>;
        const { current, last } = clampPosition(navStore.currentPosition() - 1, navStore.lastPosition());
        applyNavigationState(store, current, last);
      },
    }))
  );
}
