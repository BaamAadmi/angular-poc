import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "./question-base";

@Component({
  // moduleId: module.id,
  selector: "stl-df-question",
  templateUrl: "dynamic-form-question.component.html"
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  ngOnInit() {

  }
  get isValid() { return this.form.controls[this.question.Key].valid; }
}
