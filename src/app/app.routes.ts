import { FlightComponent } from './flight/flight.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight/flight-search/flight-search.component';
import { ReactiveFlightSearchComponent } from './flight/reactive-flight-search/reactive-flight-search.component';
import { BasketComponent } from './basket/basket.component';
import { CustomPreloadingStrategy } from './shared/preloading/custom-preloading-strategy';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight',
        loadChildren: './flight/flight.module#FlightModule' 
    },
    {
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },
/*     {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'reactive-flight-search',
        component: ReactiveFlightSearchComponent,
    }, */
  /*   {
        path: '**',
        redirectTo: 'home'
    } */
];

export const AppRouterModule =
    RouterModule.forRoot(
        APP_ROUTES,
        { preloadingStrategy: CustomPreloadingStrategy   }
    );
