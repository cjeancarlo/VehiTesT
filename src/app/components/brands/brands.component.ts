import { Component, OnInit } from '@angular/core';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';
import { TrafficBrand } from 'src/app/interfaces/traffic-brand';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  trafficBrands: TrafficBrand[] = [];

  constructor(private trafficMeisterService: TrafficMeisterService) {}

  ngOnInit() {

    this.trafficMeisterService.getTypes().subscribe(type => {
      this.trafficBrands = type.map(item => {
        return {
          id: item.id,
          type: item.type,
          brand: item.brand
        };
      });
    });

  }

}
