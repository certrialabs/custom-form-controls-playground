import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSectionComponent } from "./DsSectionComponent";

describe('DsSectionComponent', () => {
  let component: DsSectionComponent;
  let fixture: ComponentFixture<DsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
