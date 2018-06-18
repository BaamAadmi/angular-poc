import { Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-stl-player",
  templateUrl: "stl-player.component.html",
  styleUrls: ["stl-player.component.scss"]
})
export class StlPlayerComponent implements OnInit {
    players: any = [];
    formData =
  [
    {
      "ControlTypeID": "1",
      "ControlType": "text",
      "FieldID": "",
      "Label": "Name",
      "IsMandatory": true
    },
    {
    "ControlTypeID": "3",
    "ControlType": "select",
    "FieldID": "",
    "Label": "Position",
    "IsMandatory": "",
    "options":
        [
          {
          "text": "Attack",
          "value": ""
          },
          {
            "text": "Midfield",
            "value": ""
          },
          {
            "text": "Defence",
            "value": ""
          },
          {
            "text": "Goal Keeper",
            "value": ""
          }
        ]
  },
  {
    "ControlTypeID": "2",
    "ControlType": "select",
    "FieldID": "",
    "Label": "Country of Origin",
    "IsMandatory": "",
    "options":
        [{
          "text": "India",
          "value": ""
        },
        {
          "text": "Poland",
          "value": ""
        },
        {
          "text": "Great Britain",
          "value": ""
        }
        ]
    }];
    ngOnInit() {

    }
}
