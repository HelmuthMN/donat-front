import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    ViewpageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FontAwesomeModule,
    DialogModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ImageModule,
    DividerModule,
  ],
  exports: [
    ViewpageComponent,
  ]
})
export class HomepageModule { }
