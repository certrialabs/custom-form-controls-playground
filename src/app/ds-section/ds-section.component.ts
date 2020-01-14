import { Component, OnInit, forwardRef, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ds-section',
  templateUrl: './ds-section.component.html',
  styleUrls: ['./ds-section.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsSectionComponent),
      multi: true
    }
  ]
})
export class DsSectionComponent implements OnInit, ControlValueAccessor {
  isDisabled = false;
  valueArr: Array<any> = [];
  itemTplRef: TemplateRef<any>;

  propagateChange = (_: any) => {};
  onTouchedChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: Array<any>): void {
    this.valueArr = obj;
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

  @Input()
  set itemTpl(value: TemplateRef<any>) {
    this.itemTplRef = value;
  }

  get itemTml(): TemplateRef<any> {
    return this.itemTplRef;
  }
}
