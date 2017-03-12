import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './components/home';
import { ProductsComponent }      from './components/products';
import { ProductDetailComponent }  from './components/product-detail';
import { ProductSearchComponent }  from './components/product-search';

import { ProductResolve }  from './resolves/product.resolve';
import { ProductSearchResolve }  from './resolves/product-search.resolve';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent, resolve: { product: ProductResolve } },
  { path: 'search/:searchText', component: ProductSearchComponent, resolve: { products: ProductSearchResolve } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
