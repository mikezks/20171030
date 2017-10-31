/*
  ### Kompletter Import aller RxJS Operatoren und Observables ###
  Dies gilt für alle Operatoren und Observables die per 'rxjs/add...' importiert werden müssen, z.B. ``import 'rxjs/add/operator/mergeMap';``
  Die "normalen Imports" müssen bei Bedarf weiterhin wie gewohnt je TS-File definiert werden, z.B.:
    import { Observable } from 'rxjs/Observable';
    import { Subject } from 'rxjs/Subject';
*/
// import 'rxjs/Rx';

/*
  ### Operatoren und Observables werden einzeln importiert ###
 */
// Observables
//import 'rxjs/add/observable/of';

// Operators
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
