import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    ViewpageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [
    ViewpageComponent
  ]
})
export class HomepageModule { }
