import { User } from '@db/prisma';

export type AppSlice = {
  readonly user: User | undefined;
  readonly authToken: string | undefined;
};

export const initialAppSlice: AppSlice = {
  user: undefined,
  authToken: undefined,
};
