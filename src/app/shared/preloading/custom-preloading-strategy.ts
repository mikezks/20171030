import { Observable } from 'rxjs/Observable';
import { PreloadingStrategy, Route } from '@angular/router';


import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

    public preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return Observable.of(true).delay(6000).switchMap(_ => fn());
    }
}