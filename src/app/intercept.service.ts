import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, httphandler: HttpHandler): Observable<HttpEvent<any>> {
    let clone = httpRequest.clone({
   
      headers: localStorage.getItem("sessionId") ?
       httpRequest.headers.set("sessionId", JSON.stringify(localStorage.getItem("sessionId")) )
       : httpRequest.headers.delete("sessionId") 
      
    })
   return  httphandler.handle(clone)
  }
}
