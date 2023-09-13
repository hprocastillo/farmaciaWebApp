import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './shared/components/home/home.component';
import {Page404Component} from './shared/components/page404/page404.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {ModuleButtonComponent} from './shared/components/module-button/module-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    ModuleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
