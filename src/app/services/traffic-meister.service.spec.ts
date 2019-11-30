

import { TestBed } from '@angular/core/testing';

import { TrafficMeisterService } from './traffic-meister.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TrafficMeisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: TrafficMeisterService = TestBed.get(TrafficMeisterService);
    expect(service).toBeTruthy();
  });
});
