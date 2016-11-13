import { Component } from '@angular/core';
import {LocalNotifications} from "ionic-native";

@Component({
  selector: 'page-contact',
  templateUrl: 'page2.html'
})
export class Page2Page {

  rangeValue: number;
  counterValue: number;

  constructor() {
    this.rangeValue = 1;
    this.counterValue = 0;
  }

}
