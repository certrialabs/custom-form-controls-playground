import { Component, OnInit, ElementRef, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, NgForm } from '@angular/forms';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

class ValueClass {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-ds-personal-info',
  templateUrl: './ds-personal-info.component.html',
  styleUrls: ['./ds-personal-info.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsPersonalInfoComponent),
      multi: true
    }
  ]
})
export class DsPersonalInfoComponent implements OnInit, ControlValueAccessor {

  valueHash: ValueClass = {
    firstName: '',
    lastName: ''
  };

  isDisabled = false;
  propagateChange = (_: any) => {};
  onTouchedChange = (_: any) => {};

  constructor(private elRef: ElementRef, private parent: NgForm) {}

  ngOnInit() {
  }

  writeValue(obj: ValueClass): void {
    this.valueHash = obj;
    this.propagateChange(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
