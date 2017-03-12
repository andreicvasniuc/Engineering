import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'home',
  templateUrl: 'template.html'
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  public loadingIcon: any = require('images/loading.gif');
  public isRecommendation: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    (<any>window).recoAPI.getData((list: string[]) => this.searchByRecommendations(list)); // get recommendations
  }

  searchByRecommendations(list:string[]): void {
    if(!list || list.length == 0) {
      this.checkProductRecommendations();
      return;
    }

    list.forEach((recommendation, index) => {
      this.productService.search(recommendation).then(products => {
        this.products = this.products.concat(products);
        if(index != list.length - 1) return;
        this.checkProductRecommendations();
      });
    });
  }

  checkProductRecommendations(): void {
    this.isRecommendation = this.products.length > 0;
    if(this.isRecommendation) return;
    this.productService.getProducts().then(products => this.products = products.slice(0, 4));
  }
}

