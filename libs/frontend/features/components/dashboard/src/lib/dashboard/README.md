# Dashboard feature

## Folder layout

| Folder | Purpose |
| ------ | ------- |
| `catalog/` | Widget implementations and registry — **start here to add widgets** |
| `shell/` | Dashboard chrome: header, widget panel, draggable widget frame |
| `engine/` | Grid, placement, drag, and stores — change only when modifying dashboard behavior |

## Add a widget

1. Create a standalone component in `catalog/widgets/` (for example `catalog/widgets/my-widget.component.ts`).
2. Register it in `catalog/widgets.registry.ts` with a unique `id`, `label`, default `rows` / `columns`, and optional styling.
3. The widget appears in the add panel automatically. Drag it onto the grid like the built-in examples.

Do not edit files under `engine/` unless you are changing how the grid, drag, or persistence works.

## Integration in fullstack-dev

- Route: `/dashboard`, public export: `Dashboard` via `@fe/dashboard`.
- Persistence: browser `localStorage`, key `dashboardLayout`. No Firebase dependency.
- First load migrates `dashboardWidgets` and `dashboardWidgetsOrder` when present,
  preserving widget IDs and order and converting 150px rows to 80px tracks.
  The legacy keys are retained for recovery until logout.
- An empty saved layout remains empty. Missing storage gets the sample default layout.
- Invalid storage is left untouched and reported through the load-error notification.
- Logout already clears `dashboardLayout` through `LocalStorageCleanerService`.
- Test: `pnpm nx run dashboard:test`; lint: `pnpm nx run dashboard:lint`.
- Build: `pnpm nx run frontend/app-jcm:build:production`.

Manual checks: add/move/resize/delete, keyboard movement, touch long press,
reload persistence, narrow viewport, dark and light themes, and logout cleanup.
