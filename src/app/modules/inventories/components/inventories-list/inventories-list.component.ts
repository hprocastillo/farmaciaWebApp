import {Component, EventEmitter, Output} from '@angular/core';
import {Inventory} from "../../../../shared/interfaces/inventory";

@Component({
  selector: 'app-inventories-list',
  templateUrl: './inventories-list.component.html',
  styleUrls: ['./inventories-list.component.scss']
})
export class InventoriesListComponent {
  @Output() outTemplate = new EventEmitter<string>();
  @Output() outInventory = new EventEmitter<Inventory>();

  page: number = 1;
  pageSize: number = 8;
  searchText: string = "";
  today: Date = new Date();

  listInventories: Inventory[] = [
    {
      storeId: 'CHO001',
      employeeId: 'Emp0003',
      issues: 'Sin observaciones.',
      status: false,
      date: 'Ago 31, 2023'
    },
    {
      storeId: 'BAR001',
      employeeId: 'Emp0002',
      issues: 'Se encontraron productos faltantes.',
      status: false,
      date: 'Jul 31, 2023'
    },
    {
      storeId: 'VES001',
      employeeId: 'Emp0001',
      issues: 'Se realizo el conteo con conformidad.',
      status: false,
      date: 'Ago 31, 2023'
    },
    {
      storeId: 'SBJ003',
      employeeId: 'Emp0001',
      issues: 'Sin observaciones.',
      status: true,
      date: 'Jul 31, 2023'
    },
  ];

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getInventory(inventory: Inventory) {
    this.outInventory.emit(inventory);
  }
}
