import { Component, OnInit } from '@angular/core';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  trafficColors: any[] = [];

  constructor(private trafficMeisterService: TrafficMeisterService) { }

  ngOnInit() {

    this.trafficMeisterService.getTypes().subscribe(type => {
      type.map(r =>
        this.trafficColors = this.trafficColors.concat(r.colors)
      );
      this.trafficColors = this.trafficColors.map(r => {
        return {
          color: r
        };
      });

      this.trafficColors = this.trafficColors.filter((value, index, self) => {
        return self.map(e =>  e.color ).indexOf(value.color) === index;
      });
    });

  }

}
