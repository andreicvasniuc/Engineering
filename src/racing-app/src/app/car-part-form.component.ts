import { Component, Output, EventEmitter } from '@angular/core';
import { CarPart } from './car-part';

@Component({
    selector: 'car-part-form',
    templateUrl: './car-part-form.component.html'
})

export class CarPartFormComponent {
    @Output() added = new EventEmitter();

    addRandom() {
        let carPart: CarPart = {
            id: 100,
            name: 'Mitshumishi',
            description: 'ola ola ola',
            inStock: 100,
            price: 99,
            image: "public/images/angular.png",
            featured: true,
            quantity: 0
        };

        console.log(carPart, CarPart);

        this.added.emit(carPart);
    }
}