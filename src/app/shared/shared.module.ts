import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityPipe } from './pipes/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';
import { TdRxFormValidationDirective } from './validation/td-rx-form-validation.directive';
import { FlightResolver } from '../flight/flight-edit/flight.resolver';
import { ExitGuard } from './exit/exit.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CustomPreloadingStrategy } from './preloading/custom-preloading-strategy';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective,
    TdRxFormValidationDirective
  ],
  exports: [
    CityPipe,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective,
    TdRxFormValidationDirective
  ]    
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [
            AuthGuard,
            AuthService, 
            ExitGuard,
            FlightResolver,
            CustomPreloadingStrategy
        ]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: []
    }
  }
}
