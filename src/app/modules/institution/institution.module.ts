import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionPageComponent } from './institution-page/institution-page.component';
import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InstitutionPageComponent,
    InstitutionDetailComponent
  ],
  imports: [
    CommonModule,
    InstitutionRoutingModule,
    SharedModule
  ],
  exports: [
    InstitutionPageComponent
  ]
})
export class InstitutionModule { }
