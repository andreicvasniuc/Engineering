import { Routes } from '@angular/router';
import { CarPartsComponent } from './car-parts.component';
import { CarPartDetailComponent } from './car-part-detail/car-part-detail.component';
import { CanActivateViaIdGuard } from './can-activate-via-id.guard';
import { CarPartResolve } from './car-part.resolve';


export const CarPartsRoutes: Routes = [
    { 
        path: '', 
        component: CarPartsComponent 
    },
    { 
        path: 'carpart/:id', 
        component: CarPartDetailComponent,
        canActivate: [ CanActivateViaIdGuard ],
        resolve: {
            carPart: CarPartResolve
        }
    }
];