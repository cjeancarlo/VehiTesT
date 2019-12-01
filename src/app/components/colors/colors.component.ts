import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';
import { MatListOption } from '@angular/material/list';
import { Subject } from 'rxjs';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { VehicleColor } from 'src/app/interfaces/vehicle-color';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit, OnDestroy {

  /** emit the destruccion of the subcriptios  */
  private unsubscribe$ = new Subject<boolean>();

  /** store the vehicules tupes array */
  trafficColorsFiltered: any[] = [];

  constructor(private tMService: TrafficMeisterService) { }

  ngOnInit() {

    /** populate and filter the  Array from service */
    this.tMService.loadFinished$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(load => {
      this.trafficColorsFiltered = [];
      this.tMService.trafficFiltered.map(r =>
        this.trafficColorsFiltered = this.trafficColorsFiltered.concat(r.colors)
      );

      this.trafficColorsFiltered = this.trafficColorsFiltered.map(r => {
        return {
          color: r
        };
      });

      this.trafficColorsFiltered =
      this.tMService.seletecColor.length === 0 ?
      this.trafficColorsFiltered.filter((value, index, self) => {
        return self.map(e => e.color).indexOf(value.color) === index;
      }) : this.tMService.seletecColor;

    });
  }

  /** update the Color List and refesh and filter data Json Array  */
  colorSelected(selectedColor: MatListOption[]) {
    this.tMService.seletecColor = selectedColor.map(types => types.value);
    this.tMService.filterSelection();
    this.tMService.loadFinished.next(true);
  }

  /** kill the subscription */
  ngOnDestroy() {
    this.tMService.detroySubcription(this.unsubscribe$);
  }

}
