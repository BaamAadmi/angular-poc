import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { FormGroup, FormControl, FormBuilder, FormArray, AbstractControl, Validators,  ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-stl-asset',
  templateUrl: './stl-asset.component.html',
  styleUrls: ['./stl-asset.component.css']
})
export class StlAssetComponent implements OnInit {
  assetForm: FormGroup;
  nameRegex: RegExp = /bob/i;
  asset: any = { name: '', alterEgo: '', currency: '' };
  items: any;
  constructor(private fb: FormBuilder,
              private http: Http) { }

  ngOnInit() {
    this.assetForm = this.fb.group({
      name: [this.asset.name, [
        Validators.required,
        Validators.minLength(4),
        this.forbiddenNameValidator(this.nameRegex)
      ] ],
      alterEgo: new FormControl(this.asset.alterEgo),
      assetEntryDate: [this.asset.name, [
        Validators.required
      ] ],
      currency: new FormControl(this.asset.currency, Validators.required),
      items: this.fb.array([ this.createItem() ])
    });

  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.assetForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  get name() { return this.assetForm.get('name'); }

  get currency() { return this.assetForm.get('currency'); }

  submitAsset(): void {
      console.log(this.assetForm.value);
  }

}
