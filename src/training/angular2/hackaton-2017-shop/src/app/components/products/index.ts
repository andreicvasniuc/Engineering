import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products',
  templateUrl: 'template.html'
})

export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
