import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../_services/alert.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'alert',
  templateUrl: './stl-alert.component.html',
  styleUrls: ['./stl-alert.component.scss']
})
export class StlAlertComponent implements OnInit {
  message: any;
  toggleButton: Boolean = false;
  OrderNumber: string;
  private errorMessage: any = '';
  constructor(public router: Router,
      private route: ActivatedRoute,
      private alertService: AlertService) { }
  ngOnInit() {
      this.alertService.getMessage().subscribe(message => {
          this.message = message;
      });
  }

  hideMessage() {
      this.alertService.hideMessage();
  }

}
