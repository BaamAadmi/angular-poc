import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routing";
import * as dynamicComponent from "./components/dynamic-form/index";
import { AppComponent } from "./app.component";
import { AppMaterialModule } from "./material.module";
import {StlPlayerComponent} from "./components/stl-player/stl-player.component";
@NgModule({
  declarations: [
    AppComponent,
    dynamicComponent.DynamicFormQuestionComponent,
    dynamicComponent.DynamicFormComponent,
    StlPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
     dynamicComponent.QuestionService,
     dynamicComponent.QuestionControlService
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
