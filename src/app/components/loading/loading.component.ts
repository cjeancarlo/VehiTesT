import { Component  } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  {

  public lottieConfig: any;
  private anim: any;

  constructor() {
      /** lottiefile config json  */
      this.lottieConfig = {
          path: 'assets/triangle-loading.json',
          renderer: 'canvas',
          autoplay: true,
          loop: true
      };
  }

  handleAnimation(anim: any) {
      this.anim = anim;
  }

}
