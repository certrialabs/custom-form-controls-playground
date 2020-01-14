import { Component, OnInit, ElementRef, forwardRef, Input, HostBinding, ViewEncapsulation, HostListener, ViewChild, ContentChild, AfterViewInit, ViewContainerRef, Injector } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, FormControl, NgControl, DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: '[app-ds-input]',
  templateUrl: './ds-input.component.html',
  styleUrls: ['./ds-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsInputComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class DsInputComponent implements OnInit, ControlValueAccessor {
  isDisabled = false;
  @HostBinding('class.disabled') get disabledGetter(): boolean { return this.isDisabled; };

  constructor(private elRef: ElementRef, private injector: Injector) {}

  writeValue(obj: string): void {
    this.elRef.nativeElement.value = obj;
  }

  registerOnChange(fn: any): void {
    const c = this.injector.get(DefaultValueAccessor);
    c.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    const c = this.injector.get(DefaultValueAccessor);
    c.registerOnTouched(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @Input() set disabled(value: boolean) {
    this.elRef.nativeElement.removeAttribute('disabled');
    this.isDisabled = value;
  }

  ngOnInit() {
    console.log(this.injector.get(DefaultValueAccessor));
  }
}
