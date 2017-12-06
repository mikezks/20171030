import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FlightService } from '../../services/flight.service';
import { Flight } from '../../entities/flight';


import { Injectable } from '@angular/core';

@Injectable()
export class FlightResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight>  {
        let id = route.params['id'];
        return this.flightService.findById(id).delay(4000);
    }
}