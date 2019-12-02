import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficMeisterService } from '@app/services/traffic-meister.service';
import { MatListOption } from '@angular/material/list';
import { Vehicle } from '@app/interfaces/vehicle';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit, OnDestroy {

  /** emit the destruccion of the subcriptios  */
  private unsubscribe$ = new Subject<boolean>();

  /** store the vehicules tupes array */
  trafficTypesFiltered: Vehicle[] = [];

  constructor(private tMService: TrafficMeisterService) { }

  ngOnInit() {

    /** populate and filter the  Array from service */
    this.tMService.loadFinished$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(load => {
        this.trafficTypesFiltered = this.tMService.trafficFiltered.filter((value, index, self) => {
          return self.map(e => e.type).indexOf(value.type) === index;
        });

        this.trafficTypesFiltered.forEach(x => {
          x.selected = this.tMService.seletecTypes.length === 1 ? true : false;
        });

      });
  }

  /** display icons  */
  showIcon(icon: string) {
    switch (icon) {
      case 'car':
        return 'directions_car';
      case 'airplane':
        return 'local_airport';
      case 'train':
        return 'train';
      default:
        break;
    }

  }

  /** update the Type List and refesh and filter data Json Array  */
  TypeSelected(selectedType: MatListOption[]) {

    this.tMService.seletecTypes = selectedType.map(types => types.value.type);
    this.tMService.filterSelection();

    this.trafficTypesFiltered = this.tMService.trafficFiltered
      .filter((value, index, self) => {
        return self.map(e => e.type).indexOf(value.type) === index;
      });

    this.tMService.loadFinished.next(true);
  }

  /** kill the subscription */
  ngOnDestroy() {
    this.tMService.detroySubcription(this.unsubscribe$);
  }
}
