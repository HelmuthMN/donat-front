import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ViewpageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FontAwesomeModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    ViewpageComponent,
  ]
})
export class HomepageModule { }
