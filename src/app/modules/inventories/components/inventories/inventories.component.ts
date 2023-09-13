import {Component} from '@angular/core';
import {Inventory} from "../../../../shared/interfaces/inventory";

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent {
  template: string = "LIST";
  inventorySelected: Inventory = {} as Inventory;


  getTemplate(template: string) {
    this.template = template;
  }

  getInventory(inventory: Inventory) {
    this.inventorySelected = inventory;
    this.template = "VIEW";
  }
}
