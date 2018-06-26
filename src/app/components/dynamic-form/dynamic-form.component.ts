import { Component, Input, Output, OnInit, ElementRef, EventEmitter, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionBase } from "./question-base";
import { QuestionControlService } from "./question-control.service";

@Component({
  selector: "stl-dynamic-form",
  templateUrl: "dynamic-form.component.html"
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmitCallback: EventEmitter<any> = new EventEmitter();

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
      this.CustomerDetailform = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
          this.onSubmitCallback.emit([this.CustomerDetailform.value, this.questions]);
  }
}
