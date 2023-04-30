import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHoursworkingComponent } from './result-hoursworking.component';

describe('ResultHoursworkingComponent', () => {
  let component: ResultHoursworkingComponent;
  let fixture: ComponentFixture<ResultHoursworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultHoursworkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultHoursworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
