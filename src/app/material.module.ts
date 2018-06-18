import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule} from "@angular/material";
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSelectModule],
})
export class AppMaterialModule {
}
