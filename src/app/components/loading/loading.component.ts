import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  {

  public lottieConfig: Object;
  private anim: any;

  constructor() {
      this.lottieConfig = {
          path: 'assets/triangle-loading.json',
          //path: 'assets/dino-dance.json',
          renderer: 'canvas',
          autoplay: true,
          loop: true
      };
  }

  handleAnimation(anim: any) {
      this.anim = anim;
  }

}
