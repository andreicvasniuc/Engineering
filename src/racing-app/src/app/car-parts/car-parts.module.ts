import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CarPartsComponent } from './car-parts.component';
import { CarPartComponent } from './car-part/car-part.component';
import { CarPartFormComponent } from './car-part-form/car-part-form.component';
import { CarPartDetailComponent } from './car-part-detail/car-part-detail.component';
import { RacingDataService } from './racing-data.service';
import { CanActivateViaIdGuard } from './can-activate-via-id.guard';
import { CarPartResolve } from './car-part.resolve';
import { CarPartsRoutes } from './car-parts.routes';

@NgModule({
    declarations: [ 
        CarPartsComponent, 
        CarPartComponent, 
        CarPartFormComponent,
        CarPartDetailComponent
     ],
    imports: [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        RouterModule.forRoot(CarPartsRoutes),
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    providers: [ 
        RacingDataService,
        CanActivateViaIdGuard,
        CarPartResolve
    ]
})
export class CarPartsModule {}