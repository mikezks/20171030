import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BASE_URL } from '../app.tokens';
import { Flight } from '../entities/flight';

@Injectable()
export class FlightService {

    private remoteApi = true;
    public flights: Flight[] = [];

    constructor(private http: HttpClient,
                @Inject(BASE_URL) private baseUrl: string) {
    }

    findById(id: string): Observable<Flight> {

        const url = (this.remoteApi) ?
            this.baseUrl + '/api/flight' :
            '/data/flight.json';

        const params = new HttpParams()
                            .set('id', id);

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this
                .http
                .get<Flight>(url, { params, headers } );
    }

    find(from: string, to: string): Observable<Flight[]> {

        const url = (this.remoteApi) ?
            this.baseUrl + '/api/flight' :
            '/data/flights.json';
        
        const params = new HttpParams()
                            .set('from', from) 
                            .set('to', to);

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this
                .http
                .get<Flight[]>(url, { params, headers } );
    }
}
