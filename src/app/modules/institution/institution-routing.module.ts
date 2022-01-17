import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { InstitutionPageComponent } from "./institution-page/institution-page.component";

const routes: Routes = [
    {
        path: 'institutions',
        component: InstitutionPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InstitutionRoutingModule{}