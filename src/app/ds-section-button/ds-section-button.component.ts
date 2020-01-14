import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ds-section-button',
  templateUrl: './ds-section-button.component.html',
  styleUrls: ['./ds-section-button.component.less']
})
export class DsSectionButtonComponent implements OnInit {
  private _items = [];
  private _inputFormat: any = {};


  constructor() { }

  ngOnInit() {
  }

  addNew() {
    this.items.push(this.emptyItem);
  }

  @Input()
  set emptyItem(value: any) {
    this._inputFormat = value;
  }

  get emptyItem() {
    return this._inputFormat;
  }

  @Input()
  set items(value: any) {
    this._items = value;
  }

  get items() {
    return this._items;
  }
}
