import { Component, OnInit, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ds-input, [app-ds-input]',
  templateUrl: './ds-input.component.html',
  styleUrls: ['./ds-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsInputComponent),
      multi: true
    }
  ]
})
export class DsInputComponent implements OnInit, ControlValueAccessor {
  isDisabled = false;
  propagateChange = (_: any) => {};

  constructor(private elRef: DefaultValueAccessor ) {}

  writeValue(obj: any): void {
    console.log('Write Value called');
    this.propagateChange(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    this.isDisabled = isDisabled;
  }

  ngOnInit() {
    console.log(this.elRef);
  }
}
