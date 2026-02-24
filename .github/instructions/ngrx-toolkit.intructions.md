---
description: "Tools for State management patterns using NgRx Signals Store"
applyTo: '**/*.store.ts'
---
Refer to the dedicated `ngrx-signals.intructions.md`for the NGRX Signal Store guidelines.

## 1. NgRx Toolkit

The NgRx Toolkit is a set of extensions to the NgRx SignalsStore.

## 2. Tools

⭐️ withDevtools(): Integration into Redux Devtools
-- withConditional(): Allows adding features to the store conditionally
-- withDataService(): Builds on top of withEntities and adds the backend synchronization to it
-- withImmutableState(): Protects the state from being mutated outside or inside the Store.
-- withResource(): Integrates Angular's Resource into SignalStore for async data operations
-- withEntityResources(): Builds on top of withResource; adds entity support for array resources (ids, entityMap, entities)
-- Mutations: Seek to offer an appropriate equivalent to signal resources for sending data back to the backend
-- withReset(): Adds a resetState method to your store
-- withCallState(): Add call state management to your signal stores
-- withStorageSync(): Synchronizes the Store with Web Storage
-- withUndoRedo(): Adds Undo/Redo functionality to your store
