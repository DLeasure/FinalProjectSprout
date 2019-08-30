import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  constructor(private http: HttpClient) { }

  getUsersLatLon(country, ZIP) {
    return this.http.get("http://localhost:3500/latLon/" + country + "/" + ZIP);
    // })
  };

  getLocationFromLatLon(latitude, longitude) {
    return this.http.get("http://localhost:3500/location/" + latitude + "/" + longitude);
  }

};
