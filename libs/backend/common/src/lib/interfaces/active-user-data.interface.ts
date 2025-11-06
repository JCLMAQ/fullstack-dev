import { PermissionClaim, Role } from '@fullstack-dev/prisma';

export interface ActiveUserData {
  /**
   * The "subject" of the token. The value of this property is the user ID
   * That ganted this token.
   */
  sub: string;
  /**
   * The subjects's (user) email.
   */
  email: string;
  /**
   * The subject's (user) role.
   */
  role: Role[];
  permissions: PermissionClaim[];
}
