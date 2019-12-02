import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficMeisterService } from '@app/services/traffic-meister.service';

import { fade } from '@app/share/animations';
import { Vehicle } from '@app/interfaces/vehicle';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: fade
})
export class GridComponent implements OnInit, OnDestroy {

  /** emit the destruccion of the subcriptios  */
  private unsubscribe$ = new Subject<boolean>();

  /** store the vehicules yupes array */
  vehiclesFiltered: Vehicle[] = [];
  constructor(private tMService: TrafficMeisterService) {}

  ngOnInit() {
    /** populate and filter the  Array from service */
    this.tMService.loadFinished$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(load  => {
      this.vehiclesFiltered = this.tMService.trafficFiltered;
    });
  }
    /** kill the subscription */
    ngOnDestroy() {
      this.tMService.detroySubcription(this.unsubscribe$);
    }
}
