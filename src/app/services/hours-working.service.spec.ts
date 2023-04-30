import { TestBed } from '@angular/core/testing';

import { HoursWorkingService } from './hours-working.service';

describe('HoursWorkingService', () => {
  let service: HoursWorkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoursWorkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
