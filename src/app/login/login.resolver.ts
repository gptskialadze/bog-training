import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class LoginResolver implements Resolve<any> {
   constructor(private  loginService: LoginService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.loginService?.getData();
    }
}