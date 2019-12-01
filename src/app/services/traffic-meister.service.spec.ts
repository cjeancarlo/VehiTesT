
import { TestBed, async, inject } from '@angular/core/testing';

import { TrafficMeisterService } from './traffic-meister.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';


describe('TrafficMeisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      TrafficMeisterService
    ],
  }));

  it('should be created', () => {
    const service: TrafficMeisterService = TestBed.get(TrafficMeisterService);
    expect(service).toBeTruthy();
  });


  it('should be retrieve data',
    inject([TrafficMeisterService], async (tMService: TrafficMeisterService) => {
      const result =  tMService.getTypes();

      result.subscribe(d => {
        expect(d.length).toBe(12);
        expect(d[0].id).toBeTruthy();
      });

      expect(result).not.toBeNull();
    })
  );


});
