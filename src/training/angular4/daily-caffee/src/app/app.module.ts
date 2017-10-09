import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }                   from './components/app';
import { HomeComponent }                  from './components/home';
import { LoginComponent }                 from './components/login';
import { MainHeaderComponent }            from './components/main-header';
import { MyAccountComponent }             from './components/my-account';
import { VendingMachineDetailComponent }  from './components/vending-machine-detail';
import { VendingMachinesComponent }       from './components/vending-machines';
import { VendingProductsComponent }       from './components/vending-products';

import { AuthenticationService } from './services/authentication.service';
import { UserService }         from './services/user.service';
import { InventoryItemsService }         from './services/inventory-items.service';
import { PagerService }         from './services/pager.service';
import { VendingProductsService }         from './services/vending-products.service';

import { AuthGuard } from './guards/auth.guard';

import { Machine } from './models/machine';
import { User } from './models/user';

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
    MainHeaderComponent,
    LoginComponent,
    HomeComponent,
    VendingMachinesComponent,
    VendingMachineDetailComponent,
    VendingProductsComponent,
    MyAccountComponent
  ],
  providers: [ 
    AuthenticationService,
    UserService,
    InventoryItemsService,
    PagerService,
    VendingProductsService,
    AuthGuard,
    Machine,
    User
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
