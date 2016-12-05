import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarPart } from './car-part';

@Component({
  selector: 'car-part-detail',
  templateUrl: './car-part-detail.component.html'
})

export class CarPartDetailComponent implements OnInit {
    item: CarPart;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('ngOnInit in CarPartDetailComponent', this.route.snapshot.data);
        this.item = this.route.snapshot.data['carPart'];
    }
}