import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HW1EX1Component } from './hw1-ex1.component';

describe('HW1EX1Component', () => {
  let component: HW1EX1Component;
  let fixture: ComponentFixture<HW1EX1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HW1EX1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HW1EX1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
