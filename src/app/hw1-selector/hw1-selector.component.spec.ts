import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HW1SELECTORComponent } from './hw1-selector.component';

describe('HW1SELECTORComponent', () => {
  let component: HW1SELECTORComponent;
  let fixture: ComponentFixture<HW1SELECTORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HW1SELECTORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HW1SELECTORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
