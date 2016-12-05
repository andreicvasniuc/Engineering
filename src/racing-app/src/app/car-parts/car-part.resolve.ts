import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Injectable()
export class CarPartResolve implements Resolve<CarPart> {

    constructor(private racingDataService: RacingDataService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        console.log('resolve in CarPartResolve', route.params['id'], +route.params['id']);
        return this.racingDataService.getCarPartById(route.params['id']);
    }
}