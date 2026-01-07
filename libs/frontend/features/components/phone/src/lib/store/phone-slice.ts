import { Sort } from "@angular/material/sort";
import { Phone } from "@db/prisma";

export interface PhoneState {
  filter: {
    ownerId: string
  },
  selectedIds: string[],
  effectiveSelectedIds: string[],
  currentSort: Sort | null,
  selectedItemId: string | null,
  selectedItem: Phone | null;
	loading: boolean;
	error: string | null;
}

export const initialPhoneState: PhoneState = {
  filter: {
    ownerId: "test",
  },
  selectedIds: [],
  effectiveSelectedIds: [],
  currentSort: null,
  selectedItemId: null,
  selectedItem: null,
  // selectionInList: new SelectionModel<User>(true, []),
	loading: false,
	error: null,
};
