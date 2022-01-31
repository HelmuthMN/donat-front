import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { InstitutionDetailComponent } from "./institution-detail/institution-detail.component";
import { InstitutionPageComponent } from "./institution-page/institution-page.component";

const routes: Routes = [
    {
        path: 'instituicoes',
        component: InstitutionPageComponent
    },
    {
        path: 'instituicao/:_id',
        component: InstitutionDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InstitutionRoutingModule{}