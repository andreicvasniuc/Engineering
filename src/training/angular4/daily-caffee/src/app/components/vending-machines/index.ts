import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Machine } from '../../models/machine';
import { InventoryItemsService } from '../../services/inventory-items.service';
import { PagerService } from '../../services/pager.service'

import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'vending-machines',
    templateUrl: 'template.html'
})

export class VendingMachinesComponent implements OnInit {
    machines: Machine[];
    pager: any = {};
    searchTerm = new Subject<string>();
    loading = true;
    lastPage: number;
    total: number;
    userId: number;
    requestURL: string;
    page: number;
    type = 1;
    perPage = 10;

    constructor(
        private router: Router,
        private pagerService: PagerService,
        private inventoryItemsService: InventoryItemsService) {

        let loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));

        this.userId = loggedInfo && loggedInfo.userId;
    }

    ngOnInit() {
        this.inventoryItemsService.getInventoryItemsList(this.getRequestURL(1))
            .subscribe(inventory => {
                console.log(inventory);
                this.machines = inventory.data;
                this.total = inventory.total;
                this.lastPage = inventory.last_page;

                this.setPage(1, true);

                this.loading = false;
            });

        this.inventoryItemsService.search(this.searchTerm, this.getRequestURL(1))
            .subscribe(results => {
                console.log(results);
                this.machines = results.data;
                this.total = results.total;
                this.lastPage = results.last_page;

                this.setPage(1, true);

                this.loading = false;
            });
    }

    getRequestURL(page: number) {
        //&searchString=${this.searchTerm$}
        this.page = page;
        return `/inventoryItems?type=${this.type}&page=${page}&user_id=${this.userId}&perPage=${this.perPage}`;
    }

    setPage(page: number, isFirst: boolean = false) {
        if (page < 1 || page > this.lastPage) {
            return;
        }

        // console.log(" : " + this.getRequestURL(page));
        // get pager object from service
        this.pager = this.pagerService.getPager(this.total, page, this.perPage, this.lastPage);

        if (!isFirst) {
            this.inventoryItemsService.getInventoryItemsList(this.getRequestURL(page))
                .subscribe(inventory => {
                    let hasOk = inventory.hasOwnProperty("ok");

                    if (hasOk) {
                        this.router.navigate(['/login']);
                    }

                    this.machines = inventory.data;
                });
        }
    }
}