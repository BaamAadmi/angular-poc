import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlTabbedGroupsComponent } from './stl-tabbed-groups.component';

describe('StlTabbedGroupsComponent', () => {
  let component: StlTabbedGroupsComponent;
  let fixture: ComponentFixture<StlTabbedGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlTabbedGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlTabbedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
