import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CodingStatsService {
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
    let waka_data = this.http.get("/stats", requestOptions);
    console.log(waka_data);
    return waka_data;
  }
}