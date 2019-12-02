import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficMeisterService } from '@app/services/traffic-meister.service';
import { MatListOption } from '@angular/material/list';
import { Subject } from 'rxjs';
import { Vehicle } from '@app/interfaces/vehicle';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit, OnDestroy {

 /** emit the destruccion of the subcriptios  */
 private unsubscribe$ = new Subject<boolean>();

 /** store the vehicules tupes array */
  trafficBrandsFiltered: Vehicle[] = [];

  constructor(private tMService: TrafficMeisterService) {}

  ngOnInit() {
 /** populate and filter the  Array from service */
    this.tMService.loadFinished$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(load  => {
      this.trafficBrandsFiltered = this.tMService.trafficFiltered;
    });
  }

  /** update the Brand List and refesh and filter data Json Array  */
  brandSelected(selectedBrand: MatListOption[]) {
    this.tMService.seletecBrands = selectedBrand.map(types => types.value.brand);

    this.tMService.seletecTypes =  this.tMService.seletecTypes.length === 0 ?
    selectedBrand.map(types => types.value.type) :
    this.tMService.seletecTypes;

    this.tMService.filterSelection();
    this.tMService.loadFinished.next(true);
 }

  /** kill the subscription */
  ngOnDestroy() {
    this.tMService.detroySubcription(this.unsubscribe$);
  }

}
