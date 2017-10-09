import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Machine } from '../../models/machine';
import { InventoryItemsService } from '../../services/inventory-items.service';
import { PagerService } from '../../services/pager.service'

@Component({
    selector: 'vending-machine-detail',
    templateUrl: 'template.html'
})

export class VendingMachineDetailComponent implements OnInit {
    machine: Machine;
    loading = true;
    userId: number;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private inventoryItemsService: InventoryItemsService) {

        let loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));
        this.userId = loggedInfo && loggedInfo.userId;
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.inventoryItemsService.getInventoryItem(+params['id']))
            .subscribe(machine => {
                console.log(machine);
                this.machine = machine.data;
            });
    }
}