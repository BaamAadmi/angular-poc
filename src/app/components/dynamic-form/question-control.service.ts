import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { QuestionBase } from "./question-base";

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};
    if (questions.length) {
      questions.forEach(question => {
        group[question.Key] = question.IsMandatory ? new FormControl(question.Value || "", Validators.required)
                                                : new FormControl(question.Value || "");
      });
    }
    return new FormGroup(group);
  }
}
