import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
     interceptorErrorTracker: Subject<string> = new Subject();
    //   interceptorErrorTracker: BehaviorSubject<string> = new BehaviorSubject("I Am initial Value");
    // interceptorErrorTracker: ReplaySubject<string> = new ReplaySubject(1);

    http = inject(HttpClient);
    subject: Subject<boolean> = new Subject();


    getData(userId: number) {
        return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    }

}