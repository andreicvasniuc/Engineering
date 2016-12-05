import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html'
})

export class CarPartsComponent {
    carParts: CarPart[];

    constructor(private racingDataService: RacingDataService) {
    }

    ngOnInit() {
        this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
    }

    totalCarParts() {
        let sum = 0;

        if(!Array.isArray(this.carParts)) return sum;

        for(let carPart of this.carParts) {
            sum += carPart.inStock;
        }

        return sum;
    }

    onCartPartAdded(carPart: CarPart) {
        console.log('carPart', carPart);
        this.carParts.push(carPart);
    }

    onCarPartDeleted(carPart: CarPart) {
        if(!carPart) return;
        
        let index = this.carParts.indexOf(carPart);
        if(index == -1) return;

        this.carParts.splice(index, 1);
    }
}