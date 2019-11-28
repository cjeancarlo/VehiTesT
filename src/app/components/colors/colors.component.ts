import { Component, OnInit } from '@angular/core';
import { TrafficMeisterService } from 'src/app/services/traffic-meister.service';
import { MatListOption } from '@angular/material/list';
import { TrafficColor } from 'src/app/interfaces/trafficColor';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  trafficColorsFiltered: any[] = [];

  constructor(private tMService: TrafficMeisterService) { }

  ngOnInit() {

    this.tMService.loadFinished$.subscribe(load => {

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

  colorSelected(selectedColor: MatListOption[]) {

    // this.tMService.seletecBrands = selectedBrand.map(types => types.value.brand);
    // this.tMService.seletecTypes = selectedBrand.map(types => {
    //   console.log(types.value);
    //   return types.value.type;
    // });

    this.tMService.seletecColor = selectedColor.map(types => types.value);


    this.tMService.filterSelection();
    this.tMService.loadFinished.next(true);
  }

}
