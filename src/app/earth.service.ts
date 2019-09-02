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

  //function to get Reduce articles from Proxy Server
  getReduceArticles() {
    return this.http.get("http://localhost:3500/reduce/");
  }

  //function to get Reduce article details from Proxy Server
  getArticleDetails(reduceURL) {
    let decodeURL = decodeURI(reduceURL);
    return this.http.get("http://localhost:3500/reduce/details/" + decodeURL);
  }
};
