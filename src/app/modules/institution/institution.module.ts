import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionPageComponent } from './institution-page/institution-page.component';
import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';

@NgModule({
  declarations: [
    InstitutionPageComponent,
    InstitutionDetailComponent
  ],
  imports: [
    CommonModule,
    InstitutionRoutingModule
  ],
  exports: [
    InstitutionPageComponent
  ]
})
export class InstitutionModule { }
