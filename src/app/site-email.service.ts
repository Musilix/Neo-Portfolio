import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SiteEmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data): Observable<Object>{
    const requestOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      })
    };

    const emailDetails = {
      emailAddress: data.email,
      topic: data.topic,
      message: data.message
    }
    
    let emailResponse = this.http.post("/sendmail", emailDetails, requestOptions);

    return emailResponse;
  }
}
