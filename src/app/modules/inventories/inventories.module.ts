import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InventoriesRoutingModule} from './inventories-routing.module';
import {InventoriesComponent} from './components/inventories/inventories.component';
import {InventoriesListComponent} from './components/inventories-list/inventories-list.component';
import {InventoriesListItemComponent} from './components/inventories-list-item/inventories-list-item.component';
import {InventoriesNewComponent} from './components/inventories-new/inventories-new.component';
import {InventoriesEditComponent} from './components/inventories-edit/inventories-edit.component';
import {InventoriesViewComponent} from './components/inventories-view/inventories-view.component';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterInventoriesPipe} from "../../shared/pipes/filter-inventories.pipe";


@NgModule({
  declarations: [
    InventoriesComponent,
    InventoriesListComponent,
    InventoriesListItemComponent,
    InventoriesNewComponent,
    InventoriesEditComponent,
    InventoriesViewComponent,
    FilterInventoriesPipe
  ],
  imports: [
    CommonModule,
    InventoriesRoutingModule,
    NgbPagination,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InventoriesModule {
}
