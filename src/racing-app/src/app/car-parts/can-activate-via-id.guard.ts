import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CanActivateViaIdGuard implements CanActivate {

    constructor() {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        console.log('canActivate in CanActivateViaIdGuard', route.params['id'], +route.params['id']);
        return (+route.params['id'])%2 == 1;
    }
}