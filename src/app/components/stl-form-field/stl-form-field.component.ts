import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'stl-form-field',
  templateUrl: './stl-form-field.component.html',
  styleUrls: ['./_stl-form-field.component.scss', '../../scss/_forms.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StlFormFieldComponent implements OnInit {
  @Input()
  label: string;
  @Input()
  name: string;
  @Input()
  form: NgForm;
  @Input()
  class: string;

  constructor() { }

  ngOnInit() {
      window.console.log(this.label);
  }

  get errors() {

    if (this.form.controls[this.name] && this.form.controls[this.name].hasError('required') && this.form.controls[this.name].dirty) {
      return ["This is requred"];
    } else {
      return [];
    }
  }
}
