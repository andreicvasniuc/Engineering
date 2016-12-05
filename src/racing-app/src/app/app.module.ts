import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CarPartsComponent } from './car-parts.component';
import { CarPartComponent } from './car-part.component';
import { CarPartFormComponent } from './car-part-form.component';
import { CarPartDetailComponent } from './car-part-detail.component';
import { RacingDataService } from './racing-data.service';
import { CanActivateViaIdGuard } from './can-activate-via-id.guard';
import { CarPartResolve } from './car-part.resolve';

@NgModule({
    declarations: [ 
        AppComponent, 
        CarPartsComponent, 
        CarPartComponent, 
        CarPartFormComponent,
        CarPartDetailComponent
     ],
    imports: [ 
        BrowserModule, 
        FormsModule, 
        HttpModule,
        RouterModule.forRoot(AppRoutes)
    ],
    bootstrap: [ AppComponent ],
    providers: [ 
        RacingDataService,
        CanActivateViaIdGuard,
        CarPartResolve
    ]
})
export class AppModule {}