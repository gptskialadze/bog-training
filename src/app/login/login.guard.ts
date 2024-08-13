import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanDeactivate<any> {
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(component.myForm.status, 'componenttt')
      if (component.myForm.status == "VALID" && component.submited) {
        return true
      } else {
        component.submited = false;
        return false
      }
      
  }
}