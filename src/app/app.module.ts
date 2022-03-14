import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountModule } from './modules/account/account.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthTokenInterceptor } from './core/services/interceptors/auth-token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutpageModule } from './modules/about/about.module';

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
    FontAwesomeModule,
    AboutpageModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
