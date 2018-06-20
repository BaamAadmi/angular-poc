import { NgModule, ModuleWithProviders, Inject, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as dynamicComponent from "./components/dynamic-form";
import {StlPlayerComponent} from "./components/stl-player/stl-player.component";
import { StlAssetComponent } from "./components/stl-asset/stl-asset.component";
const appRoutes: Routes = [
    {path: "form", component: dynamicComponent.DynamicFormComponent },
    {path: "players", component: StlPlayerComponent },
    {path: "asset-entry", component: StlAssetComponent}
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


