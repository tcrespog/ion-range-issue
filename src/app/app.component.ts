import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen, LocalNotifications } from 'ionic-native';

import {HomePage} from "../pages/home/home";
import {Page2Page} from "../pages/contact/page2";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      LocalNotifications.on('click', () => {
        console.log('Notification clicked');
        this.nav.push(Page2Page)
      });
    });
  }
}
