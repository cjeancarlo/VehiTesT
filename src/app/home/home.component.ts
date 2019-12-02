import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficMeisterService } from '@app/services/traffic-meister.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  /** enable or disable css class */
  isActive: { t: boolean, b: boolean, c: boolean } = {
    t: false,
    b: false,
    c: false
  };

  constructor(private tMService: TrafficMeisterService) { }

  ngOnInit() {
    this.tMService.loadFinished
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe( x => this.loading = x );
  }

  /** kill the subscription */
  ngOnDestroy() {
    this.tMService.detroySubcription(this.unsubscribe$);
    }

  over(action: MouseEvent, div: string) {
    const act = action.type === 'mouseover' ? true : false;
    this.isActive = {
        t : div === 'type' ? act : false,
        b : div === 'brand' ? act : false,
        c : div === 'color' ? act : false
    };
  }

}
