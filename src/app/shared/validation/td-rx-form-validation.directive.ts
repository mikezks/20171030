import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[allowedCitiesValidatorTd]',
  providers: [
    { provide: NG_VALIDATORS, useValue: allowedCitiesValidatorRx, multi: true }
  ]
})
export class TdRxFormValidationDirective {

  constructor() { }

}

export function allowedCitiesValidatorRx (c: AbstractControl): any {
  if (c.value !== 'Graz' &&
      c.value !== 'Hamburg' &&
      c.value !== 'Turin') {
      return {
          cityGrazHamburgTdRxForm: true
      };
  }
  return {};
}