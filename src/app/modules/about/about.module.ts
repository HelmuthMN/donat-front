import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about-page/about.component';
import { AboutPageRoutingModule } from './about-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    AboutComponent,
  ]
})
export class AboutPageModule { }