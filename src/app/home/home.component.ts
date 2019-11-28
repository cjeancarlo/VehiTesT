import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trafficMeisterForm: FormGroup;

  constructor() {
    this.trafficMeisterForm = new FormGroup(
      {
        type: new FormControl(),
        brand: new FormControl(),
        color: new FormControl()
      }
    );
  }

  ngOnInit() {
  }

}
