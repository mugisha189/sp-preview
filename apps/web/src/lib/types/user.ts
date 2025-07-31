import type { BaseType, PaginationData } from '.';
import type { Role } from './roles';

// TODO: Add or remove fields as needed
export type User = BaseType & {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  roleId: string;
  telephone: string;
  profilePicture: string | null;
  accountStatus: 'ACTIVE' | 'INACTIVE' | 'DEACTIVATED';
  activationCode?: string;
  expirationToken: string;
  role: Role;
};

export type UserData = PaginationData<'data', User>;
