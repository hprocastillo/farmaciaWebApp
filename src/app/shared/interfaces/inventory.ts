export interface Inventory {
  id?: string;

  storeId: string;//codigo de la tienda

  employeeId: string;//codigo del empleado

  issues: string;//incidencias u observaciones

  status: boolean;//activo o terminado

  date: string;
}

export interface InventoryDetail {
  id?: string;
  inventoryId: string;

  code_pro: string;
  description_pro: string;
  code_lab: string;
  description_lab: string;
  stock_e: number;
  stock_f: number;
  stock_f_enable: boolean;
  status: boolean;
}
