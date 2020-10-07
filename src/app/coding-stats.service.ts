import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodingStatsService {
  private wakaKey = "97230bf8-04d3-47c5-b170-105f22575cae";
  private wakeUrl = "https://wakatime.com/api/v1/users/current/stats/"

  private options: string[] = ["last_7_days"];

  constructor(private http: HttpClient) { }

  getMyStats(): Observable<Object>{
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };

    let base = environment;
    let urlPrefix = "";
    if(base.production){
      urlPrefix = "https://cors-anywhere.herokuapp.com/https://wakatime.com/";
    }

    //calling directly to the endpoint causes errors with CORS...
    //adding a proxy config and calling the endpoint with the domain works in local, but not prod
    //adding this heroku cors reroute to the api endpoint resolves prod issues
    // console.log(`${urlPrefix}api/v1/users/current/stats/last_7_days?api_key=97230bf8-04d3-47c5-b170-105f22575cae`);
    return this.http.get(`${urlPrefix}api/v1/users/current/stats/last_7_days?api_key=97230bf8-04d3-47c5-b170-105f22575cae`, requestOptions);

  }

}
