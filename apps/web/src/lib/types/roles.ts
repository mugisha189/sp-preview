import { BaseType, PaginationData } from '.';

// TODO: Add or remove fields as needed
export interface Role extends BaseType {
  name: string;
  permissions: Permission[];
}

export interface Permission extends BaseType {
  name: PermissionName;
}

export enum RoleName {
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER = 'USER',
}

export const permissionsNames = [
  'CREATE_USER',
  'UPDATE_USER',
  'DELETE_USER',
  'CREATE_ROLE',
  'UPDATE_ROLE',
  'DELETE_ROLE',
] as const;

export type PermissionName = (typeof permissionsNames)[number];

// export enum PermissionName {
//    // User permissions
//    CREATE_USER = 'CREATE_USER',
//    UPDATE_USER = 'UPDATE_USER',
//    DELETE_USER = 'DELETE_USER',

//    // Role permissions
//    CREATE_ROLE = 'CREATE_ROLE',
//    UPDATE_ROLE = 'UPDATE_ROLE',
//    DELETE_ROLE = 'DELETE_ROLE',

//    // Career
// }

export type RoleData = PaginationData<'data', Role>;
