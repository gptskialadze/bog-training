import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
     interceptorErrorTracker: Subject<string> = new Subject();
    //   interceptorErrorTracker: BehaviorSubject<string> = new BehaviorSubject("I Am initial Value");
    // interceptorErrorTracker: ReplaySubject<string> = new ReplaySubject(1);

}