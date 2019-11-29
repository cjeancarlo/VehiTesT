import { Component, OnInit } from '@angular/core';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';

import { fade } from 'src/app/share/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: fade
})
export class GridComponent implements OnInit {

  trafficvehiclesFiltered: any[] = [];
  
  constructor(private tMService: TrafficMeisterService) {}

  ngOnInit() {
    this.tMService.loadFinished$.subscribe(load  => {
      this.trafficvehiclesFiltered = this.tMService.trafficFiltered;
    });
  }

}
