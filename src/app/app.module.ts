import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlightSearchModule } from './flight-search/flight-search.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BASE_URL } from './app.tokens';
import { FlightService } from './services/flight.service';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightSearchModule,
    AppRouterModule
  ],
  providers: [
    { provide: BASE_URL,
      useValue: 'http://www.angular.at'
    },
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
