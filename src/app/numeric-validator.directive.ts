import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNumericValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumericValidatorDirective,
      multi: true,
    },
  ],
})
export class NumericValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if (inputValue && /\d/.test(inputValue)) {
      return { numeric: true };
    }
    return null;
  }
}

