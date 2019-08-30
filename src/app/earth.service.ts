import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  constructor(private http: HttpClient) { }

  earthURL : string = 'http://api.earth911.com/earth911.';

  earthAPIKey : string = 'eb3751a3e2f435e6';

  latitude: number;

  getUsersLatLon(country, ZIP) {
    return this.http.get("http://localhost:3500/");
    // })
  };

}
