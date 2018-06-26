import { Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";

import { slideInOutAnimation } from '../../_animations/index';
import { PlayerService, PubSubService, AlertService } from '../../_services/index';

@Component({
  selector: "stl-player",
  templateUrl: "stl-player.component.html",
  styleUrls: ["./../../scss/_forms.scss"],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class StlPlayerComponent implements OnInit {
    players: any[] = [];
    player: any;
    title: string;
    formData =
  [
    {
      "ControlTypeID": "1",
      "ControlType": "text",
      "FieldID": "",
      "Label": "Name",
      "IsMandatory": true,
      "Key": "name"
    },
    {
    "ControlTypeID": "3",
    "ControlType": "select",
    "FieldID": "",
    "Label": "Position",
     "Key": "position",
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
    "Key": "country",
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
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private http: Http,
      private alertService: AlertService,
      private playerService: PlayerService,
      private pubSubService: PubSubService
      ) { }
      ngOnInit() {
        const playerId = Number(this.route.snapshot.params['id']);
        if (playerId) {
            this.title = 'Edit player';
            this.player = this.playerService.getById(playerId);
        }
    }

    saveplayer(player: any, configuration: any) {
      // tslint:disable-next-line:no-debugger
      // save player
        this.playerService.save(player);

        // redirect to users view
        // this.router.navigate(['players']);

        // publish event so list controller can refresh
        this.pubSubService.publish('players-updated');
    }
}
