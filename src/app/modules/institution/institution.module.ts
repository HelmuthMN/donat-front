import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionPageComponent } from './institution-page/institution-page.component';
import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';
import { SharedModule } from '../shared/shared.module';
import { InstitutionRegisterComponent } from './institution-register/institution-register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InstitutionPageComponent,
    InstitutionDetailComponent,
    InstitutionRegisterComponent
  ],
  imports: [
    CommonModule,
    InstitutionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    InstitutionPageComponent
  ]
})
export class InstitutionModule { }
