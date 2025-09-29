import { InjectionToken } from "@angular/core";
import { Dictionaries } from "../layout/src/lib/models/dictionary.model";

export const DICTIONARIES_TOKEN = new InjectionToken<Dictionaries>('DICTIONARIES_TOKEN');
