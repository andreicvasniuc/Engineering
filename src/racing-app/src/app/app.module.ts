import { NgModule } from '@angular/core';

import { CarPartsModule } from './car-parts/car-parts.module'

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ 
        AppComponent
     ],
    imports: [
        CarPartsModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}