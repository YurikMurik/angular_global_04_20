import { Component, forwardRef, ViewEncapsulation } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-created-at-date-field',
  templateUrl: './custom-created-at-date-field.component.html',
  styleUrls: ['./custom-created-at-date-field.component.less'],
  providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCreatedAtDateFieldComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CustomCreatedAtDateFieldComponent),
    multi: true,
  }],
  encapsulation: ViewEncapsulation.None
})

export class CustomCreatedAtDateFieldComponent implements ControlValueAccessor, Validator {
  private _value: string = '';
  public onChange: (_: string) => void;
  public onTouched: () => void;

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  public writeValue(value: string): void {
    this._value = value;
  }

  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    const dateMask: RegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    const isValid: boolean = dateMask.test(this._value);
    if (!isValid && this._value) {
      return { wrongFormatError: true };
    }
  }
}
