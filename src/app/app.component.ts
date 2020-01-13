import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'custom-form-controls';
  formHash = {
    personalInfo: {
      firstName: 'Kiril',
      lastName: 'Kalchev'
    }
  };

  onSubmit(event) {
    console.log("Form submitted");
    console.log(this.formHash);
  }
}
