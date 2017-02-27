import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ErgastService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ErgastService {
  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'http://ergast.com/api/f1/';
  }

  getDriverStandings(driverId: string): Observable<string[]> {
    // return this.http.get(this.baseUrl + year + '/driverStandings.json')
    return this.http.get(this.baseUrl + 'drivers/' + driverId + '/driverStandings.json')
      .map(res => {
        const resJson = res.json();
        
        if (resJson.hasOwnProperty('MRData')) {
          return resJson.MRData.StandingsTable.StandingsLists;
        }

        return resJson;
      });
  }

  getDrivers(): Observable<string[]> {
    return this.http.get(this.baseUrl + 'drivers.json')
      .map(res => {
        const resJson = res.json();
        
        if (resJson.hasOwnProperty('MRData')) {
          return resJson.MRData.DriverTable.Drivers;
        }

        return resJson;
      });
  }

  getDriverDetail(id: string): Observable<string[]> {
    return this.http.get(this.baseUrl + 'drivers/'+ id +'.json')
      .map(res => {
        const resJson = res.json();
        
        if (resJson.hasOwnProperty('MRData')) {
          return resJson.MRData.DriverTable.Drivers[0];
        }

        return resJson;
      });
  }

}
