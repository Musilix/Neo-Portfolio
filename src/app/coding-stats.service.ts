import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CodingStatsService {
  private wakaUrl = "api/v1/users/current/stats/"
  private options: string[] = ["last_7_days"];
  private apiKey = process.env.WAKA_API_KEY;

  //THIS NEEDS TO BE CHANGED. CORS ANYHERE AINT THE MOVE NO MORE... OF course...
  //currently making the url prefix for both prod and non prod to use cors anyhere proxy
  private urlPrefix = "https://cors-anywhere.herokuapp.com/https://wakatime.com/";

  constructor(private http: HttpClient) { }

  getMyStats(): Observable<Object>{
    const requestOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      })
    };
    
    //calling directly to the endpoint causes errors with CORS...
    //adding a proxy config and calling the endpoint with the domain works in local, but not prod
    //adding this heroku cors reroute to the api endpoint resolves prod issues
    return this.http.get(`${this.urlPrefix}${this.wakaUrl}${this.options[0]}?${this.apiKey}`, requestOptions);
  }
}