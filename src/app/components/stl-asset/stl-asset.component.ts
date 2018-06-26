import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { FormGroup, FormControl, FormBuilder, FormArray, AbstractControl, Validators,  ValidatorFn } from "@angular/forms";
import { AlertService } from "../../_services/alert.service";

/*Custom Animations */
import * as CustomAnimations from "../../_animations";
@Component({
  selector: 'stl-asset',
  templateUrl: './stl-asset.component.html',
  styleUrls:  ['./../../scss/_forms.scss'],
  animations: [CustomAnimations.fadeInAnimation, CustomAnimations.slideInOutAnimation]
})
export class StlAssetComponent implements OnInit {
  assetForm: FormGroup;
  nameRegex: RegExp = /bob/i;
  asset: any = { name: '', alterEgo: '', currency: '', player: '', toggle: '' };
  items: any;
  currencyList: any;
  active: boolean;
  dob: any;

  constructor(private fb: FormBuilder,
              private http: Http,
              private alertService: AlertService) {}

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
      player: new FormControl([]),
      shopping: new FormControl([]),
      currency: new FormControl([]),
      items: this.fb.array([ this.createItem() ])
    });
    this.currencyList = [{name: "Dollar", id: 1, value: "&#36;", description: "This is the currency of United States of America"},
                         {name: "Euro", id: 2, value: "&#8364;", description: "This is the currency of Europian Union"},
                         {name: "Pound", id: 3, value: "&#163;", description: "This is the currency of Great Britain"},
                         {name: "INR", id: 4, value : "&#8377;", description: "This is the currency of India"}];
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

  removeItem(index: number): void {
    this.items = this.assetForm.get('items') as FormArray;
    this.items.removeAt(index);
  }

  get name() { return this.assetForm.get('name'); }

  get currency() { return this.assetForm.get('currency'); }

  submitAsset(): void {
    if (this.assetForm.valid) {
    const thisRef = this;
     this.alertService.confirm("Are you sure you want to Submit?", function() {
          // ACTION: Do this If user says YES
          thisRef.alertService.success("Great!");
        }, function() {
          // ACTION: Do this if user says NO
          thisRef.alertService.error("Bad choice");
        });
    }
  }

  checkValue(event: any) {
    if (event === 'active') {
      this.active = true;
    } else {
      this.active = false;
    }
  }

}
