import { AuthGuard } from '../shared/auth/auth.guard';
import { ExitGuard } from '../shared/exit/exit.guard';
import { FlightResolver } from './flight-edit/flight.resolver';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../home/home.component";
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightComponent } from './flight.component';


const FLIGHT_SEARCH_ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        data: {
            neededRoles: ['Manager', 'Admin', 'NiceGuy']
        },
        children: [

            {
                path: '',
                component: FlightComponent,
                children: [
                    {
                        path: 'flight-search',
                        component: FlightSearchComponent
                    },
                    {
                        path: 'reactive-flight-search',
                        component: ReactiveFlightSearchComponent
                    },
                    {
                        path: 'passenger-search',
                        component: PassengerSearchComponent
                    },
                    {
                        path: 'flight-edit/:id',
                        component: FlightEditComponent,
                        canDeactivate: [ExitGuard],
                        resolve: {
                            flight: FlightResolver
                        }
                    }
               
                ]
            }
        ]        
    }
];

export const FlightSearchRouterModule = RouterModule.forChild(FLIGHT_SEARCH_ROUTES);