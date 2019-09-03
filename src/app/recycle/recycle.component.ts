import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.css']
})
export class RecycleComponent implements OnInit {

  country: string = "US";
  ZIP: number;
  latitude: number;
  longitude: number;
  locationId: string;

  response: any;
  responseDescription: string;
  responseDistance: number;
  responseAddress: string;
  responseCity: string;
  responseZip: number;
  responseState: string;
  responsePhone: string;
  responseCountry: string;
  responseHours: string;
  // locationIdValue: string;

  constructor(private earthService: EarthService) {};

  requestLatLonAndLocation() {
    this.earthService.getUsersLatLon(this.country, this.ZIP).subscribe((resp: any) => {
      console.log(resp);
      this.latitude = resp.latitude;
      this.longitude = resp.longitude;
      this.requestLocation();
    });
  };

  requestLocation() {
    this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe((resp: any) => {
      this.responseDescription = resp.description;
      this.responseDistance = resp.distance;
      this.locationId = resp.location_id;
      this.requestLocationDetails();
    });
  };

  requestLocationDetails() {
    this.earthService.getLocationDetails(this.locationId).subscribe((resp: any) => {
      // getting key/value pair from Json object with name and variable
      let key;
      for (var k in resp) {
        key = k;
      };
      // locationIdValue = this.locationId;
      console.log(resp)
      this.response = resp[k].materials;
      this.responseAddress = resp[k].address;
      // this.responseDescription = resp.description;
      // this.responseDistance = resp.distance;
    });
  };
  

  ngOnInit() {
  }

}
