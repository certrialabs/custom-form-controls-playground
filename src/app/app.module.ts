import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DsInputComponent } from './ds-input/ds-input.component';
import { DsPersonalInfoComponent } from './ds-personal-info/ds-personal-info.component';
import { DsSectionComponent } from './ds-section/ds-section.component';
import { DsSectionButtonComponent } from './ds-section-button/ds-section-button.component';


@NgModule({
  declarations: [
    AppComponent,
    DsInputComponent,
    DsPersonalInfoComponent,
    DsSectionComponent,
    DsSectionButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
