import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';

import { Product } from '../../models/product';

@Component({
  selector: 'product-detail',
  templateUrl: 'template.html'
})
export class ProductDetailComponent implements OnInit {
  public product: Product;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
    setTimeout(() => {
      (<any>window).recoAPI.saveData(); // save recommendations
    }, 50);
  }

  goBack(): void {
    this.location.back();
  }

}
