import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPersonalInfoComponent } from './ds-personal-info.component';

describe('DsPersonalInfoComponent', () => {
  let component: DsPersonalInfoComponent;
  let fixture: ComponentFixture<DsPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
