---
description: "Tools for State management patterns using NgRx Signals Store"
applyTo: '**/*.store.ts'
---

# Refer to the dedicated `ngrx-signals.intructions.md`for the NGRX Signal Store guidelines

## 1. NgRx Toolkit

The NgRx Toolkit is a set of extensions to the NgRx SignalsStore.

## 2. Tools

⭐️ withDevtools(): Integration into Redux Devtools
-- withConditional(): Allows adding features to the store conditionally
-- withDataService(): Builds on top of withEntities and adds the backend synchronization to it
-- withImmutableState(): Protects the state from being mutated outside or inside the Store.
-- withResource(): Integrates Angular's Resource into SignalStore for async data operations - Prefer withEntityResources() over withResource()
-- withEntityResources(): Builds on top of withResource; adds entity support for array resources (ids, entityMap, entities) - Do not use withEntities()
-- Mutations: Seek to offer an appropriate equivalent to signal resources for sending data back to the backend
-- withReset(): Adds a resetState method to your store
-- withCallState(): Add call state management to your signal stores (do not use with withResource() or withEntityResources())
-- withStorageSync(): Synchronizes the Store with Web Storage
-- withUndoRedo(): Adds Undo/Redo functionality to your store

## 3. withEntityResources

Use withEntityResources() in place of withEntities() - for entities collections - and withMethods() for fetching data methods.
withEntityResources() integrates Angular Resources that return arrays into NgRx SignalStore using the Entity helpers from @ngrx/signals/entities.

Note: This feature builds on withResource() and adds an entity view over array resources.

Prefers always Named resources over Unnamed resource

Unnamed resource: Your store exposes resource members (value, status, error, isLoading, etc.) and additionally derives entity members: ids, entityMap, entities.

Named resources: Register multiple array resources by name. The store exposes prefixed members per resource, e.g. todosValue, todosIds, todosEntityMap, todosEntities.
This feature composes withResource() and the Entities utilities without effects. Entity state is linked to the resource value using linked signals, so updaters like addEntity, updateEntity, and removeEntity mutate the entity view in the store while the source of truth remains the resource.

## 4. withMutations (and httpMutation and rxMutation )

The mutations feature (withMutations) and methods (httpMutation and rxMutation) seek to offer an appropriate equivalent to signal resources for sending data back to the backend. The methods can be used in withMutations() but can be used outside of a store in something like a component or service as well.

For httpMutation, the response type is specified with the param parse: (res: T) => res as T
Full examples of Both mutations in a withMutations():

```typescript
  withMutations((store) => ({
    increment: rxMutation({
      operation: (params: Params) => {
        return calcSum(store.counter(), params.value);
      },
      onSuccess: (result) => {
        // ...
      },
      onError: (error) => {
        // ...
      },
    }),
    saveToServer: httpMutation({
      request: (_: void) => ({
        url: `https://httpbin.org/post`,
        method: 'POST',
        body: { counter: store.counter() },
      }),
      parse: (response) => response as CounterResponse,
      onSuccess: (response) => {
        console.log('Counter sent to server:', response);
        patchState(store, { lastResponse: response.json });
      },
      onError: (error) => {
        console.error('Failed to send counter:', error);
      },
    }),
  })),
  ````

## 4.2 Use within Compoenent

````typscript
@Component({...})
export class CounterMutation {
  private store = inject(CounterStore);

  // signals
  protected counter = this.store.counter;
  protected error = this.store.incrementError;
  protected isPending = this.store.incrementIsPending;
  protected status = this.store.incrementStatus;
  // signals
  protected saveError = this.store.saveToServerError;
  protected saveIsPending = this.store.saveToServerIsPending;
  protected saveStatus = this.store.saveToServerStatus;
  protected lastResponse = this.store.lastResponse;

  increment() {
    this.store.increment({ value: 1 });
  }

  // `Promise` version nice if you want to the result's `status`
  async saveToServer() {
    await this.store.saveToServer();
  }
}
````
