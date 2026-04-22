import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { ShellService } from "./shell.service";

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    shellService = inject(ShellService)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        let sessionData = sessionStorage.getItem('sessionId');
        console.log(sessionData);
        
        console.log(JSON.parse(sessionData || "{}")['clientkey']);
        
        return JSON.parse(sessionData || "{}")['clientkey'] ? true: false
    }

}