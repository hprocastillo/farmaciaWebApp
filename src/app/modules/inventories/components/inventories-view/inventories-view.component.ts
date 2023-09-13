import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Inventory} from "../../../../shared/interfaces/inventory";

@Component({
  selector: 'app-inventories-view',
  templateUrl: './inventories-view.component.html',
  styleUrls: ['./inventories-view.component.scss']
})
export class InventoriesViewComponent {
  @Input() inventory = {} as Inventory;
  @Output() outTemplate = new EventEmitter<string>();


  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }
}
