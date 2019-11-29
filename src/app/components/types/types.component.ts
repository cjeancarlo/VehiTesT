import { Component, OnInit, Input } from '@angular/core';
import { TrafficType } from 'src/app/interfaces/trafficType';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  trafficTypes: TrafficType[] = [];
  trafficTypesFiltered: TrafficType[] = [];

  constructor(private tMService: TrafficMeisterService) { }

  ngOnInit() {

    this.tMService.loadFinished$.subscribe(load => {
      this.trafficTypesFiltered = this.tMService.trafficFiltered.filter((value, index, self) => {
        return self.map(e => e.type).indexOf(value.type) === index;
      });


      this.trafficTypesFiltered.forEach(x => {
        x.selected = this.tMService.seletecTypes.length === 1 ? true : false;
      });

    });
  }

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

  TypeSelected(selectedType: MatListOption[]) {



    this.tMService.seletecTypes = selectedType.map(types => types.value.type);
    this.tMService.filterSelection();

    this.trafficTypesFiltered = this.tMService.trafficFiltered
      .filter((value, index, self) => {
        return self.map(e => e.type).indexOf(value.type) === index;
      });

    this.tMService.loadFinished.next(true);
  }

}
