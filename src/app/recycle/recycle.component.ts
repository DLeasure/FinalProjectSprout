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

  response: object;
  responseArray: Array<object>;
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
    this.earthService.getUsersLatLon(this.country, this.ZIP).subscribe(resp => {
      // console.log(resp);
      this.latitude = resp.latitude;
      this.longitude = resp.longitude;
      this.requestLocation();
    });
  };

  requestLocation() {
    // this.requestLatLon();
    // console.log("first API request ran");
    this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe(resp => {
      console.log("second API request ran");
      console.log(resp);
      this.responseDescription = resp.description;
      this.responseDistance = resp.distance;
      this.locationId = resp.location_id;
      this.requestLocationDetails();
    });
  };

  requestLocationDetails() {
    // this.requestLatLon();
    this.earthService.getLocationDetails(this.locationId).subscribe(resp => {
      console.log("third API request ran");
      // console.log(resp);
      // locationIdValue = this.locationId;
      this.response = resp.valueOf(this.locationId);
      this.responseArray = Object.keys(this.response).map(i => this.response[i]);
      // console.log(this.responseArray);
      this.responseAddress = this.responseArray[0].address;
      this.responseDescription = this.responseArray[0].description;
      // this.responseDistance = this.responseArray[0].distance;
      this.responseCity = this.responseArray[0].city;
      this.responseZip = this.responseArray[0].postal_code;
      this.responseState = this.responseArray[0].province;
      this.responsePhone = this.responseArray[0].phone;
      this.responseCountry = this.responseArray[0].country;
      this.responseHours = this.responseArray[0].hours;
      // console.log(this.responseAddress);
      // this.responseDescription = resp.description;
      // this.responseDistance = resp.distance;
    }); 
  };
  

  ngOnInit() {
  }

}
