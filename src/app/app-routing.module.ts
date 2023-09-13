import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "./shared/components/page404/page404.component";
import {HomeComponent} from "./shared/components/home/home.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./modules/stores/stores.module').then(m => m.StoresModule)
  },
  {
    path: 'inventories',
    loadChildren: () => import('./modules/inventories/inventories.module').then(m => m.InventoriesModule)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
