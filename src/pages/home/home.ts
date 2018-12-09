import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import DayInfo from '../../entities/dayInfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  themeColor: string;
  dayInfo: DayInfo;

  constructor(public navCtrl: NavController) {
    this.themeColor = '#7E6E86';

    this.dayInfo = new DayInfo(new Date());
    console.log(this.dayInfo);
  }

}
