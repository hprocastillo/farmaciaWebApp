import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "../../shared/components/page404/page404.component";
import {InventoriesComponent} from "./components/inventories/inventories.component";

const routes: Routes = [
  {
    path: '', component: InventoriesComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoriesRoutingModule {
}
