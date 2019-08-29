import { Component } from '@angular/core';
import { EarthService } from './earth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprout';

  latitude: number;
  longitude: number;

  constructor(private earthService: EarthService) {};

  requestLatLon() {
    this.earthService.getUsersLatLon('US', '48044').subscribe(resp => {
      console.log(resp);
      this.latitude = resp.latitude;
      this.longitude = resp.longitude;
    });
  };
};
