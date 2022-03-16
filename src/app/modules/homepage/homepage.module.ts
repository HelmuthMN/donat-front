import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ViewpageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    ViewpageComponent,
  ]
})
export class HomepageModule { }
