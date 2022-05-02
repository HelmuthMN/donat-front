import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageModule } from './modules/homepage/homepage.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthTokenInterceptor } from './core/services/interceptors/auth-token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './core/services/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
    [CookieService, AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
