import { Component, NgModule } from "@angular/core";
import {  Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { DisplayComponent } from "./modules/display/display.component";
import { CreateComponent } from "./modules/create/create.component";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { AdminModule } from "./admin/admin.module";

const routes: Routes = [{
    path:'display', component: DisplayComponent},
    {path:'create', component: CreateComponent},
    {path:'' , redirectTo :'/login/page',pathMatch: "full"},
    {path:'login',loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)},
    {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
    {path:'**', component:PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRountingModule {

}