import { Component, OnInit, HostBinding,  HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'stl-tabbed-groups',
  templateUrl: './stl-tabbed-groups.component.html'
  // styleUrls: ['./stl-tabbed-groups.component.scss']
})
export class StlTabbedGroupsComponent implements OnInit {
  constructor( private route: ActivatedRoute,
               private router: Router) { }
  ngOnInit() {
  }

}
