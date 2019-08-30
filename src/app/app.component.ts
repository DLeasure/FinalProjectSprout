import { Component } from '@angular/core';
import { EarthService } from './earth.service'
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprout';

  country: string = "US";
  ZIP: number = 48044;
  latitude: number;
  longitude: number;

  constructor(private earthService: EarthService) {};

  requestLatLonAndLocation() {
    this.earthService.getUsersLatLon(this.country, this.ZIP).subscribe(resp => {
      console.log(resp);
      this.latitude = resp.latitude;
      this.longitude = resp.longitude;
      this.requestLocation();
    });
  };

  requestLocation() {
    // this.requestLatLon();
    console.log("first API request ran");
    this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe(resp => {
      console.log("second API request ran");
      console.log(resp);
    });
  };
};
