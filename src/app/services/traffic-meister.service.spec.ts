import { TestBed } from '@angular/core/testing';

import { TrafficMeisterService } from './traffic-meister.service';

describe('TrafficMeisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficMeisterService = TestBed.get(TrafficMeisterService);
    expect(service).toBeTruthy();
  });
});
