import { Component, Input, OnInit, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";

import { slideInOutAnimation, fadeInAnimation } from '../../_animations/index';
import { PlayerService, PubSubService, AlertService } from '../../_services/index';

@Component({
  selector: "stl-player",
  templateUrl: "stl-player.component.html",
  styleUrls: ["./../../scss/_forms.scss"],
  styles: [`.view-side-form .side-form {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    overflow: auto;
    background: #fff;
    padding: 20px;
    border-left: 1px solid #e0e0e0;
}`],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' },
  encapsulation: ViewEncapsulation.None
})
export class StlPlayerComponent implements OnInit {
    players: any[] = [];
    player: any;
    playerId: number;
    title: string;
    formData =
  [
    {
      "ControlTypeID": "1",
      "ControlType": "text",
      "FieldID": "",
      "Label": "Name",
      "IsMandatory": true,
      "Key": "name",
      "Value": ""
    },
    {
    "ControlTypeID": "3",
    "ControlType": "select",
    "FieldID": "",
    "Label": "Position",
     "Key": "position",
    "IsMandatory": "",
    "Value": "",
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
    "Value": "",
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
        this.playerId = Number(this.route.snapshot.params['id']);
        if ( this.playerId) {
            this.title = 'Edit player';
            this.player = this.playerService.getById( this.playerId);
            if (this.player) {
              for (let i = 0; i < this.formData.length; i++ ) {
                  if (this.player[this.formData[i].Key] !== undefined) {
                    this.formData[i].Value = this.player[this.formData[i].Key];
                  }
              }
            }
        }
    }

    saveplayer(player: any, configuration: any) {
        if (this.playerId) {
           player.id = this.playerId;
        }
        this.playerService.save(player);
        this.alertService.success("Player saved successfully");
        // redirect to users view
        this.router.navigate(['players']);

        // publish event so list controller can refresh
        this.pubSubService.publish('players-updated');
    }
}
