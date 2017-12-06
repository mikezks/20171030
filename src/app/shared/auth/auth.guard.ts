import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router, 
        private authService: AuthService) { 

        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        console.debug('route.data', route.data);
        console.debug('AuthGuard::currentUser', this.authService.userName);        

        if (!this.authService.userName || route.data.neededRoles.indexOf(this.authService.role) < 0) {
            this.router.navigate(['home', { plsLoginNow: true }])
        }
        return true;
    }
}