import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficMeisterService } from '../services/traffic-meister.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  /** emit the destruccion of the subcriptios  */
  private unsubscribe$ = new Subject<boolean>();

  /** check if the loading svg is showing */
  loading = false;

  constructor(private tMService: TrafficMeisterService) { }

ngOnInit() {
 this.tMService.loadFinished.subscribe(x => this.loading = x);
}

  /** kill the subscription */
  ngOnDestroy() {
    this.tMService.detroySubcription(this.unsubscribe$);
  }


}
