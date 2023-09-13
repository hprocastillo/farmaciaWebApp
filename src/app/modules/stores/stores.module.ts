import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoresRoutingModule} from './stores-routing.module';
import {StoresComponent} from './components/stores/stores.component';
import {StoresListComponent} from './components/stores-list/stores-list.component';
import {StoresListItemComponent} from './components/stores-list-item/stores-list-item.component';
import {StoresNewComponent} from './components/stores-new/stores-new.component';
import {StoresEditComponent} from './components/stores-edit/stores-edit.component';
import {StoresViewComponent} from './components/stores-view/stores-view.component';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FilterStoresPipe} from "../../shared/pipes/filter-stores.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StoresComponent,
    StoresListComponent,
    StoresListItemComponent,
    StoresNewComponent,
    StoresEditComponent,
    StoresViewComponent,
    FilterStoresPipe
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    NgbPagination,
    FormsModule
  ]
})
export class StoresModule {
}
