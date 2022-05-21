export enum UserTypes {
  SUPER = 1,
  SUPPLIER = 2,
}

export enum Permissions {
  ORDERS_ALL = 'orders.all',
  INVENTORY_ALL = 'inventory.all',
}

export const PERMISSIONS = {
  [UserTypes.SUPER]: [Permissions.ORDERS_ALL, Permissions.INVENTORY_ALL],
  [UserTypes.SUPPLIER]: [Permissions.ORDERS_ALL, Permissions.INVENTORY_ALL],
};
