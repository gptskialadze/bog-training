import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let cln = req.clone({
    setHeaders: {
      id: "1212"
    },
    body: {
      ...req.body,
      "test": "1010"
    },
     method: 'POST'
   });

    return next.handle(cln).pipe(
      
    tap(
      {
        next: (res) => console.log(res),
        error: (err: HttpErrorResponse) => console.log(err.status, err.message,  'errrrrr')  
      }
    )
    
  )
  }
}
