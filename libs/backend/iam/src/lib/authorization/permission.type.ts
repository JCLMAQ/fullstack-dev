import { PermissionClaim } from '@fullstack-dev/prisma';

export const Permission = {
  ...PermissionClaim,
};

export type PermissionType = PermissionClaim; // | ...other permission enums
