import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { Product } from '../../models/product';

@Component({
  selector: 'product-search',
  templateUrl: 'template.html'
})

export class ProductSearchComponent implements OnInit {
  products: Product[];

  constructor(private route: ActivatedRoute) { }

  search(): void {
    this.products = this.route.snapshot.data['products'];
  }

  ngOnInit(): void {
    this.search();
  }
}
