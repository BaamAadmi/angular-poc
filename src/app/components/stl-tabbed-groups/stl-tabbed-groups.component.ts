import { Component, OnInit, HostBinding,  HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'stl-tabbed-groups',
  templateUrl: './stl-tabbed-groups.component.html',
  styles: [`
:host{
  position: relative;
  width: 400px;
  display:block;
}

/deep/ .header{
  height: 20px;
  line-height: 20px;
  background-color: #ddd;
}

/deep/ .items .item{
    border-bottom: 1px solid black;
}

/deep/ .items:last-child .item{
    border-bottom: 0px;
}`],
animations: [
    trigger('visibilityState', [
      state('tab1', style({
          transform: 'scale(1)',
      })),
      state('tab2', style({
          transform: 'scale(1.2)',
      })),
      transition('tab1 => tab2', animate('100ms ease-in')),
  ]),
]
  // styleUrls: ['./stl-tabbed-groups.component.scss']
})
export class StlTabbedGroupsComponent implements OnInit {

  constructor() { }
  @HostBinding('style.color') color: string;
  ngOnInit() {
  }

}
