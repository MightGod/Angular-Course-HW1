import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HW1EX2Component } from './hw1-ex2.component';

describe('HW1EX2Component', () => {
  let component: HW1EX2Component;
  let fixture: ComponentFixture<HW1EX2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HW1EX2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HW1EX2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
