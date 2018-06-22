import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
/* Bootstrap CSS elements module */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/* ng Select module */
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from "./app.routing";
import * as dynamicComponent from "./components/dynamic-form/index";
import { AppComponent } from "./app.component";
import {StlPlayerComponent} from "./components/stl-player/stl-player.component";
import { StlAssetComponent } from './components/stl-asset/stl-asset.component';
import { StlFormFieldComponent } from './components/stl-form-field/stl-form-field.component';
@NgModule({
  declarations: [
    AppComponent,
    dynamicComponent.DynamicFormQuestionComponent,
    dynamicComponent.DynamicFormComponent,
    StlPlayerComponent,
    StlAssetComponent,
    StlFormFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    NgSelectModule
  ],
  providers: [
    dynamicComponent.QuestionService,
    dynamicComponent.QuestionControlService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
