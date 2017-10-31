import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlightModule } from './flight/flight.module';
import { AppComponent } from './app.component';
import { BASE_URL } from './app.tokens';
import { FlightService } from './services/flight.service';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightModule,
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
