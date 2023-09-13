import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesListItemComponent } from './components/employees-list-item/employees-list-item.component';
import { EmployeesNewComponent } from './components/employees-new/employees-new.component';
import { EmployeesEditComponent } from './components/employees-edit/employees-edit.component';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesListItemComponent,
    EmployeesNewComponent,
    EmployeesEditComponent,
    EmployeesViewComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
