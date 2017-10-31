import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

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
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
