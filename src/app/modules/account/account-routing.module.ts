import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/services/auth/auth.guard';
import { LoggedAuthGuard } from 'src/app/core/services/auth/logged-auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'logar',
    component: LoginComponent,
    canActivate: [LoggedAuthGuard]
  },
  {
    path: 'registrar',
    component: RegisterComponent,
    canActivate: [LoggedAuthGuard]
  },
  {
    path: 'perfil',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }