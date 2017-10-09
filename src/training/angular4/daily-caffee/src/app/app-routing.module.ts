import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }                 from './components/login';
import { HomeComponent }                  from './components/home';
import { VendingMachinesComponent }       from './components/vending-machines';
import { VendingMachineDetailComponent }  from './components/vending-machine-detail';
import { VendingProductsComponent }       from './components/vending-products';
import { MyAccountComponent }             from './components/my-account';
// import { ProductDetailComponent }  from './components/product-detail';
// import { ProductSearchComponent }  from './components/product-search';

// import { ProductResolve }  from './resolves/product.resolve';
// import { ProductSearchResolve }  from './resolves/product-search.resolve';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vending-machines', component: VendingMachinesComponent, canActivate: [AuthGuard] },
  { path: 'vending-machine-detail/:id', component: VendingMachineDetailComponent, canActivate: [AuthGuard] },
  { path: 'vending-products', component: VendingProductsComponent, canActivate: [AuthGuard] },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
