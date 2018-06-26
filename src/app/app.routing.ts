import { NgModule, ModuleWithProviders, Inject, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as dynamicComponent from "./components/dynamic-form";
import {StlPlayerComponent, StlPlayerListComponent } from "./components/stl-player";
import { StlAssetComponent } from "./components/stl-asset/stl-asset.component";
const appRoutes: Routes = [
    {path: "form", component: dynamicComponent.DynamicFormComponent },
    {
        path: 'players',
        component: StlPlayerListComponent,
        children: [
            { path: 'add', component: StlPlayerComponent },
            { path: 'edit/:id', component: StlPlayerComponent }
        ]
    },
    {path: "asset-entry", component: StlAssetComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}


