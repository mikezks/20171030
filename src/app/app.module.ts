import { SharedModule } from './shared/shared.module';
import { BasketComponent } from './basket/basket.component';
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
    BasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //FlightModule, // This prevents Lazy Loading!
    AppRouterModule,
    SharedModule.forRoot() // Important for Lazy Loading!
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
