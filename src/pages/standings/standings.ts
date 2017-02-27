import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, NavParams, Loading } from 'ionic-angular';
import { ErgastService } from '../../providers/ergast-service';

/*
  Generated class for the Standings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage implements OnInit {

  private loading: Loading;
  standings: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private service: ErgastService) {
    this.standings = [];
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');
  }

  ngOnInit() {
    const id = this.navParams.get('driverId');
    console.log('ngOnInit...', id);

    this.service.getDriverStandings(id).subscribe(data => {
      this.standings = data;
      console.log('standings:', this.standings);
      this.loading.dismiss();
    });
  }

}
