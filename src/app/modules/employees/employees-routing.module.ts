import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Page404Component} from "../../shared/components/page404/page404.component";
import {EmployeesComponent} from "./components/employees/employees.component";

const routes: Routes = [
  {
    path: '', component: EmployeesComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {
}
