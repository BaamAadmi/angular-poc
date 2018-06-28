import { Component, OnInit, Input } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'stl-form-input-selection',
  templateUrl: './stl-form-input-selection.component.html',
  styleUrls: ['./_stl-form-input-selection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StlFormInputSelectionComponent implements OnInit {
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
}
