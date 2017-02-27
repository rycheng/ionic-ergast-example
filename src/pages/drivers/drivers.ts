import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ErgastService } from '../../providers/ergast-service';
import { StandingsPage } from '../standings/standings';

/*
  Generated class for the Drivers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage implements OnInit {

  drivers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ErgastService) {
    this.drivers = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriversPage');
  }

  ngOnInit() {
    console.log('ngOnInit...');
    this.fetchDrivers();
    // console.log('drivers: ', this.drivers);
  }

  fetchDrivers() {
    this.service.getDrivers().subscribe(data => {
      console.log('data: ', data);
      this.drivers = data;
    });
  }

  showStandings(event, driverId) {
    this.navCtrl.push(StandingsPage, {
      driverId: driverId
    });
  }
}
