import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-duration-field',
  templateUrl: './custom-duration-field.component.html',
  styleUrls: ['./custom-duration-field.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDurationFieldComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomDurationFieldComponent),
      multi: true,
    }
  ],
})

export class CustomDurationFieldComponent implements ControlValueAccessor, Validator {
  private _value: number;
  public onChange: (_: number) => void;
  public onTouched: () => void;

  get value(): number {
    return this._value;
  }

  set value(v: number) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  public writeValue(value: number): void {
    this._value = value;
  }

  public registerOnChange(fn: (_: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public correctInputValue(): boolean {
    return this._value && !isNaN(this._value);
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    const isNotValid: boolean = isNaN(this._value);
    if (isNotValid) {
      return { onlyNumberError: true };
    }
  }
}
