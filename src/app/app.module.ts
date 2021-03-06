import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
/* ng Select module */
import { NgSelectModule } from '@ng-select/ng-select';
import * as AllServices from "./_services";
import { AppRoutingModule } from "./app.routing";
import * as dynamicComponent from "./components/dynamic-form/index";
import { AppComponent } from "./app.component";
import {StlPlayerComponent, StlPlayerListComponent} from "./components/stl-player";
import { StlAssetComponent } from './components/stl-asset/stl-asset.component';
import { StlFormFieldComponent } from './components/stl-form-field/stl-form-field.component';
import { StlFormInputSelectionComponent } from './components/stl-form-input-selection/stl-form-input-selection.component';
import { StlAlertComponent } from './components/stl-alert/stl-alert.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { StlTabbedGroupsComponent } from './components/stl-tabbed-groups/stl-tabbed-groups.component';

/*Custom Animations */
import * as CustomAnimations from "./_animations";

@NgModule({
  declarations: [
    AppComponent,
    dynamicComponent.DynamicFormQuestionComponent,
    dynamicComponent.DynamicFormComponent,
    StlPlayerComponent,
    StlPlayerListComponent,
    StlAssetComponent,
    StlFormFieldComponent,
    StlFormInputSelectionComponent,
    StlAlertComponent,
    StlTabbedGroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    dynamicComponent.QuestionService,
    dynamicComponent.QuestionControlService,
    AllServices.AlertService,
    AllServices.PlayerService,
    AllServices.PubSubService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
