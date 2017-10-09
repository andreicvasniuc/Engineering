import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Machine } from '../../models/machine';
import { VendingProductsService } from '../../services/vending-products.service';
import { PagerService } from '../../services/pager.service';


@Component({
    selector: 'vending-products',
    templateUrl: 'template.html'
})

export class VendingProductsComponent implements OnInit {
    products: any;
    pager: any = {};
    lastPage: number;
    total: number;
    type = 1;
    page = 1;
    perPage = 3;
    loading = true;

    constructor(
        private router: Router,
        private pagerService: PagerService,
        private vendingProductsService: VendingProductsService) { }

    ngOnInit(): void {

        this.vendingProductsService.getVendingProductsList(this.type, this.page, this.perPage)
            .then(inventory => {
                console.log(inventory);
                this.products = inventory.data;
                this.total = inventory.total;
                this.lastPage = inventory.last_page;

                this.setPage(1, true);

                this.loading = false;
            });
    }

    setPage(page: number, isFirst: boolean = false): void {
        if (page < 1 || page > this.lastPage) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.total, page, this.perPage, this.lastPage);

        if (!isFirst) {
            this.vendingProductsService.getVendingProductsList(this.type, page, this.perPage)
                .then(inventory => {

                    this.products = inventory.data;
                    this.total = inventory.total;
                    this.lastPage = inventory.last_page;
                });
        }
    }

}