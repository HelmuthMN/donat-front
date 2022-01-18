import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ViewpageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [
    ViewpageComponent,
    NavbarComponent
  ]
})
export class HomepageModule { }
