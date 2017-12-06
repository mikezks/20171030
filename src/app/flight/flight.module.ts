import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightSearchRouterModule } from './flight.routes';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightComponent } from './flight.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlightSearchRouterModule,
    ReactiveFormsModule,
    SharedModule.forChild()
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    ReactiveFlightSearchComponent,
    PassengerSearchComponent,
    FlightComponent
  ],
  providers: [],
  exports: [
    FlightSearchComponent
  ]    
})
export class FlightModule { }
