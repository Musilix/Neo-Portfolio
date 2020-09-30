import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpStatsInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("REQ URL: " + request.url);
        if(request.url.indexOf("https://musilix.github.io/Neo-Portfolio/") > 0){
            console.log("Prod");

            let exclude_base = request.url.replace("https://musilix.github.io/Neo-Portfolio/", "");
            let req = request.clone({
                url: exclude_base
            });

            return next.handle(req);
        }

        console.log("Non prod");
        return next.handle(request);
    }
}
