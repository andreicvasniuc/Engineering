import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }           from './components/app';
import { HomeComponent }          from './components/home';
import { ProductsComponent }      from './components/products';
import { ProductDetailComponent } from './components/product-detail';
import { ProductSearchComponent } from './components/product-search';
import { ProductTileComponent }   from './components/product-tile';
import { MainHeaderComponent }    from './components/main-header';
import { MainFooterComponent }    from './components/main-footer';
import { NavigationComponent }    from './components/navigation';
import { LoadingIconComponent }   from './components/loading-icon';
import { ProductService }         from './services/product.service';
import { NavigationService }      from './services/navigation.service';
import { ProductResolve }         from './resolves/product.resolve';
import { ProductSearchResolve }   from './resolves/product-search.resolve';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductTileComponent,
    MainHeaderComponent,
    MainFooterComponent,
    NavigationComponent,
    LoadingIconComponent
  ],
  providers: [ 
    ProductService,
    NavigationService,
    ProductResolve,
    ProductSearchResolve
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
