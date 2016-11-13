import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Page2Page} from "../contact/page2";
import { LocalNotifications } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {}

  goToPage2() {
    this.nav.push(Page2Page)
  }

  scheduleNotification() {
    LocalNotifications.schedule({
      title: 'Go to page 2',
      at: new Date()
    })
  }

}
