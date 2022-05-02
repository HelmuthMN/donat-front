import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/services/auth/auth.guard";
import { InstitutionDetailComponent } from "./institution-detail/institution-detail.component";
import { InstitutionPageComponent } from "./institution-page/institution-page.component";
import { InstitutionRegisterComponent } from "./institution-register/institution-register.component";

const routes: Routes = [
    {
        path: '',
        component: InstitutionPageComponent
    },
    {
        path: 'i',
        component: InstitutionDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "registrar",
        component: InstitutionRegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InstitutionRoutingModule{}