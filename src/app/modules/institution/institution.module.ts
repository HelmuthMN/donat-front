import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionPageComponent } from './institution-page/institution-page.component';
import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';
import { SharedModule } from '../shared/shared.module';
import { InstitutionRegisterComponent } from './institution-register/institution-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';


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
    DividerModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    SelectButtonModule
  ],
  exports: [
    InstitutionPageComponent
  ]
})
export class InstitutionModule { }
