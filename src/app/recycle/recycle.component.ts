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
  responseArrayKeys: Array<string> = ["first", "30"];
  responseArrayObjects: Array<object>;

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
      this.requestLocation();
    });
  };

  requestLocation() {
    this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe(resp => {
      console.log("second API request ran");
      for (let index = 0; index < 20; index++) {
        this.responseArrayKeys[index] = (resp[index].location_id);
      };
      console.log(this.responseArrayKeys);      
      this.requestLocationDetails();
    });
  };

  requestLocationDetails() {
    console.log(this.responseArrayKeys[0]);
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
      console.log(values);
    });
  };
  

  ngOnInit() {
  }

}
