import { Component, OnInit } from '@angular/core';
import { TrafficMeisterService } from '../services/traffic-meister.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
 
  constructor(private tMService: TrafficMeisterService)  {

}

ngOnInit() {
 this.tMService.loadFinished.subscribe(x => this.loading = x);
}

}
