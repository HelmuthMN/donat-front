import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    UserProfileComponent
  ]
})
export class AccountModule { }
