import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './modules/account/account.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    HomepageModule,
    InstitutionModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
