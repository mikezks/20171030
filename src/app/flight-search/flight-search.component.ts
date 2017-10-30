import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  public from: string = 'Hamburg';
  public to: string = 'Graz';
  public flights: Flight[] = [];
  public date: string = (new Date()).toISOString();
  public selectedFlight: Flight;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public search(): void {

    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
                        .set('from', this.from) 
                        .set('to', this.to);

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    const searchFlights = this.http
          .get<Flight[]>(url, { params, headers } );


    const subscrFlight = searchFlights.subscribe(
      //then
            (flights: Flight[]) => {
              this.flights = flights;
            },
      //catch
            (errResponse) => {
              console.error('Fehler beim Laden', errResponse)
            },
      //finally
            () => {

            }
          );  
  }

  public select(f: Flight): void {
    this.selectedFlight = f;
  }

}
