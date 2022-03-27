import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
// import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    RatingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminModule { }
