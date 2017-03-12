import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product';


@Injectable()
export class ProductService {

  private productsUrl = 'https://shopv2.herokuapp.com/shopv2s';
  //private productsUrl = 'https://osf-reco-api.herokuapp.com/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.loadProducts();
  }

  search(searchText: string): Promise<Product[]> {
    return this.loadProducts((products) => {
      return !searchText ? products : products.filter((product) => product.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1 || product.description.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
    });
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Product)
      .catch(this.handleError);
  }

  private loadProducts(callback?: (products: Product[]) => Product[]): Promise<Product[]> {
    return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => {
                 let products = response.json() as Product[];
                 return callback == null ? products : callback(products);
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
