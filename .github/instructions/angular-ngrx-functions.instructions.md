---
description:  Angular 21 and NGRX Signal Store - Functions to use
applyTo: "**/*.ts"
---
Refer to the dedicated `ngrx-signals.instructions.md` file for comprehensive guidance on using NGRX Signals Store effectively for state management with Angular signals, providing a reactive and efficient approach to managing application state.

# Functions to use

## SignalMethod

[signalMethod](https://ngrx.io/api/signals/signalMethod-0) is a standalone factory function used for managing side effects with Angular signals. It accepts a callback and returns a processor function that can handle either a static value or a signal. The input type can be specified using a generic type argument. ([https://ngrx.io/guide/signals/signal-method](https://ngrx.io/guide/signals/signal-method))

## DeepComputed

The [deepComputed](https://ngrx.io/api/signals/deepComputed) function creates a [DeepSignal](https://ngrx.io/api/signals/DeepSignal) when a computation result is an object literal. It can be used as a regular computed signal, but it also contains computed signals for each nested property. ([https://ngrx.io/guide/signals/deep-computed](https://ngrx.io/guide/signals/deep-computed))

## LinkedSignal vs Computed**

### When to Prefer linkedSignal**

Use linkedSignal when:

- You want a derived default value, but still need the flexibility to update it locally.
- You’re working with inputs or external signals but want to maintain a local copy that can be overridden internally.
- You need access to the previous state during recalculations.
- In contrast, computed() is perfect when your signal is purely reactive and read-only, with no need to write back or override.

[https://dev.to/learn_with_ahmed/understanding-linkedsignal-vs-computed-in-angular-signals-aca](https://dev.to/learn_with_ahmed/understanding-linkedsignal-vs-computed-in-angular-signals-aca)

## Resource and httpResource
Refer to the dedicated `angular-resource.instructions.md` file for comprehensive guidance on using Angular's Resource API and httpResource effectively for managing async data with signals, providing a reactive and efficient approach to data fetching and state management.


