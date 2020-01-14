import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSectionButtonComponent } from './ds-section-button.component';

describe('DsSectionButtonComponent', () => {
  let component: DsSectionButtonComponent;
  let fixture: ComponentFixture<DsSectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsSectionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsSectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
