import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { forkJoin, Observable } from 'rxjs';

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
  responseArrayKeys: Array<string> = [];
  responseArrayObjects: Array<object> = [{0: {
    address: "46922 Romeo Plank",
    city: "Macomb",
    country: "US",
    created: "2011-12-20T11:53:27",
    curbside: false,
    description: "AutoZone",
    event_only: false,
    fax: "",
    geocoded: true,
    hours: "Please call for hours of operation.",
    latitude: 42.64244119839103,
    location_type_id: 28,
    longitude: -82.93529707050959,
    municipal: false,
    national: false,
    notes: null,
    notes_public: null,
    phone: "(586) 226-2730",
    postal_code: "48044",
    province: "MI",
    region: "Macomb",
    updated: "2011-12-20T11:53:27",
    url: "https://www.autozone.com/landing/page.jsp?name=in-our-stores"
  }}, {0: {
    address: "18400 Hall Rd",
    city: "Charter Township of Clinton",
    country: "US",
    created: "2012-06-20T17:48:50",
    curbside: false,
    description: "Walmart Supercenter",
    event_only: false,
    fax: "",
    geocoded: true,
    hours: "Please call for hours of operation.",
    latitude: 42.62599730967077,
    location_type_id: 28,
    longitude: -82.93753160591059,
    municipal: false,
    national: false,
    notes: null,
    notes_public: null,
    phone: "(586) 263-7196",
    postal_code: "48038",
    province: "MI",
    region: "Macomb",
    updated: "2012-06-20T17:48:50",
    url: "https://www.walmart.com/"
  }}];

  constructor(private earthService: EarthService) {};
  
  // responseDescription: string;
  // responseDistance: number;
  // responseAddress: string;
  // responseCity: string;
  // responseZip: number;
  // responseState: string;
  // responsePhone: string;
  // responseCountry: string;
  // responseHours: string;
  // locationIdValue: string;
  

  requestLatLonAndLocation() {
    this.earthService.getUsersLatLon(this.country, this.ZIP).subscribe(resp => {
      this.latitude = resp.latitude;
      this.longitude = resp.longitude;
      // console.log(resp);
      this.requestLocation();
    });
  };

  requestLocation() {
    this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe(resp => {
      console.log("second API request ran");
      // console.log(resp);
      for (let index = 0; index < 20; index++) {
        this.responseArrayKeys[index] = (resp[index].location_id);
      };
      // console.log(this.responseArrayKeys);
      this.requestLocationDetails();
    });
  };

  requestLocationDetails() {
    // console.log(this.responseArrayKeys[0]);
    console.log("fork runs now");
    let promises : Observable<object>[] = [
      this.earthService.getLocationDetails(this.responseArrayKeys[0]),
      this.earthService.getLocationDetails(this.responseArrayKeys[1]),
      this.earthService.getLocationDetails(this.responseArrayKeys[2]),
      this.earthService.getLocationDetails(this.responseArrayKeys[3]),
      this.earthService.getLocationDetails(this.responseArrayKeys[4]),
      this.earthService.getLocationDetails(this.responseArrayKeys[5]),
      this.earthService.getLocationDetails(this.responseArrayKeys[6]),
      this.earthService.getLocationDetails(this.responseArrayKeys[7]),
      this.earthService.getLocationDetails(this.responseArrayKeys[8]),
      this.earthService.getLocationDetails(this.responseArrayKeys[9]),
      this.earthService.getLocationDetails(this.responseArrayKeys[10]),
      this.earthService.getLocationDetails(this.responseArrayKeys[11]),
      this.earthService.getLocationDetails(this.responseArrayKeys[12]),
      this.earthService.getLocationDetails(this.responseArrayKeys[13]),
      this.earthService.getLocationDetails(this.responseArrayKeys[14]),
      this.earthService.getLocationDetails(this.responseArrayKeys[15]),
      this.earthService.getLocationDetails(this.responseArrayKeys[16]),
      this.earthService.getLocationDetails(this.responseArrayKeys[17]),
      this.earthService.getLocationDetails(this.responseArrayKeys[18]),
      this.earthService.getLocationDetails(this.responseArrayKeys[19])
    ];
    forkJoin(promises).subscribe(values => {
      console.log("ran");
      // console.log(values);
      this.responseArrayObjects = values;
      console.log(this.responseArrayObjects);
    });
  };
  

  ngOnInit() {
  }

} 
