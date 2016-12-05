import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CarPart } from './car-part';

@Component({
    selector: 'car-part',
    templateUrl: './car-part.component.html',
    styleUrls: ['./car-part.component.css']
})

export class CarPartComponent {
    @Input() item: CarPart;
    @Output() deleted = new EventEmitter();

    upQuantity(event: any, inputQuantity: HTMLInputElement) {
        console.log(event, inputQuantity.value);
        if(this.item.inStock <= this.item.quantity) return;
        this.item.quantity ++;
    }

    downQuantity() {
        if(this.item.quantity === 0) return;
        this.item.quantity --;
    }

    delete() {
        this.deleted.emit(this.item);
    }
}