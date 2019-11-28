import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TrafficType } from 'src/app/interfaces/trafficType';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  trafficTypes: TrafficType[] = [];

  constructor(private trafficMeisterService: TrafficMeisterService) {

  }

  ngOnInit() {

    this.trafficMeisterService.getTypes().subscribe(type => {
      this.trafficTypes = type/*.map(item => {
        return {
          id: item.id,
          type: item.type
        };
      })*/
        .filter((value, index, self) => {
          return self.map(e =>  e.type ).indexOf(value.type) === index;
        });
    });


  }


}
