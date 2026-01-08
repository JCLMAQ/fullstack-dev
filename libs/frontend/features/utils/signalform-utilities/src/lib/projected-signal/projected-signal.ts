import { computed, WritableSignal } from "@angular/core";
import { SIGNAL } from "@angular/core/primitives/signals";
import { ProjectedSignal, ProjectedSignalOptions } from "./projected-signal.types";

// Source: https://medium.com/@kobihari/connecting-signal-forms-to-a-signal-store-39dabd69b888
// Github: https://github.com/kobi2294/fun-with-projected-signals/tree/main

export function projectedSignal<T>(options: ProjectedSignalOptions<T>): ProjectedSignal<T> {
    const internalSignal = computed(options.computation);

    const res: ProjectedSignal<T> = Object.assign(
        () => internalSignal(),
        {
            [SIGNAL]: internalSignal[SIGNAL],
            set: (value: T) => options.update(value),
            update: (updateFn: (value: T) => T) => {
                const newValue = updateFn(internalSignal());
                options.update(newValue);
            },
            asReadonly: () => internalSignal
        } as WritableSignal<T>
    );
    return res;
}
