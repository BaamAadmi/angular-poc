import { Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionBase } from "./question-base";
import { QuestionControlService } from "./question-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "dynamic-form.component.html"
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  CustomerDetailform: FormGroup;
  OrderNumber: any;
  customerTransaction: any;
  private errorMessage: any;
  currentUser: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private qcs: QuestionControlService,
    // private custTranService: any,

  ) {
  }

  ngOnInit() {
      console.log(this.questions);
      this.CustomerDetailform = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
      this.customerTransaction.ClientId = this.currentUser.ClientId;
      this.customerTransaction.UserId = this.currentUser.UserId;
      this.customerTransaction.OrderNumber = this.OrderNumber;
      this.customerTransaction.CustomerDetailTransaction =
      Object.keys(this.CustomerDetailform.value).map((key) => {
        return { Key: key, Value: this.CustomerDetailform.value[key] };
      });
      console.log(this.customerTransaction);
      // this.custTranService.PostCustomerDetails(this.customerTransaction)
      //   .subscribe(
      //   x => {
      //        // Everything is done clear flow information.
      //   },
      //   error => this.errorMessage = <any>error,
      //   () => {
      //   } // this gets called on completion
      //   );
  }
}
