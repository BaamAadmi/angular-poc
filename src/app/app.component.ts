import { Component } from "@angular/core";
import * as AllAnimations from "./_animations";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [AllAnimations.routeAnimation]
})
export class AppComponent {
  title = "app";
  prepRouteState(outlet: any) {
    return outlet.activatedRouteData.animation;
  }
}
