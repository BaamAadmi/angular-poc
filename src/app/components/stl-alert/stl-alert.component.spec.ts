import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlAlertComponent } from './stl-alert.component';

describe('StlAlertComponent', () => {
  let component: StlAlertComponent;
  let fixture: ComponentFixture<StlAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
