import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page2Page } from '../pages/contact/page2';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    Page2Page,
    HomePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page2Page,
    HomePage,
  ],
  providers: []
})
export class AppModule {}
