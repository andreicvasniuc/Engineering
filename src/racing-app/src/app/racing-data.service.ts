import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CarPart } from './car-part';

@Injectable()
export class RacingDataService {

    constructor(private http: Http) {}

    getCarParts() {
        return this.http.get('public/data/car-parts.json').map(response => <CarPart[]>response.json().data);
    }

    getCarPartById(id: number) {
        return this.http.get(`public/data/car-parts_${id}.json`).map(response => <CarPart>response.json().data);
    }
}