import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  constructor(private http: HttpClient) { }

  earthURL : string = '';

  earthAPIKey : string = 'eb3751a3e2f435e6';

}
