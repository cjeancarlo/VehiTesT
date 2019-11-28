import { Component, OnInit } from '@angular/core';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';
import { TrafficBrand } from 'src/app/interfaces/traffic-brand';
import { MatListOption } from '@angular/material/list';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  trafficBrandsFiltered: TrafficBrand[] = [];
  constructor(private tMService: TrafficMeisterService) {}

  ngOnInit() {
    this.tMService.loadFinished$.subscribe(load  => {
      this.trafficBrandsFiltered = this.tMService.trafficFiltered;
    });
  }

  brandSelected(selectedBrand: MatListOption[]) {

    this.tMService.seletecBrands = selectedBrand.map(types => types.value.brand);
    this.tMService.seletecTypes =  this.tMService.seletecTypes.length === 0 ?
    selectedBrand.map(types => types.value.type) :
    this.tMService.seletecTypes;

    this.tMService.filterSelection();
    this.tMService.loadFinished.next(true);

  }


}
