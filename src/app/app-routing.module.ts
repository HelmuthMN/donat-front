import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { InstitutionDetailComponent } from './modules/institution/institution-detail/institution-detail.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'conta',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'instituicoes',
    loadChildren: () => import('./modules/institution/institution.module').then(m => m.InstitutionModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
