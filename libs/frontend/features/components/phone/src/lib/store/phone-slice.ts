import { Sort } from '@angular/material/sort';

export interface PhoneState {
  filter: {
    ownerId: string | null;
  };
  currentSort: Sort | null;
  loading: boolean;
  error: string | null;
}

export const initialPhoneState: PhoneState = {
  filter: {
    ownerId: null,
  },
  currentSort: null,
  loading: false,
  error: null,
};
