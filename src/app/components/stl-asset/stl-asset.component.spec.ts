import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlAssetComponent } from './stl-asset.component';

describe('StlAssetComponent', () => {
  let component: StlAssetComponent;
  let fixture: ComponentFixture<StlAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
