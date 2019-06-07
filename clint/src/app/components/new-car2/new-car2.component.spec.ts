import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCar2Component } from './new-car2.component';

describe('NewCar2Component', () => {
  let component: NewCar2Component;
  let fixture: ComponentFixture<NewCar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
