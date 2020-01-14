import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isDisabled = false;
  foo = "Foo";

  title = 'custom-form-controls';
  formHash = {
    personalInfo: {
      firstName: 'Kiril',
      lastName: 'Kalchev'
    },
    ubos: [{
      firstName: 'UBO1',
      lastName: 'Company'
    }, {
      firstName: 'UBO2',
      lastName: 'Company'
    }]
  };

  onSubmit(event) {
    console.log("Form submitted");
    console.log(this.formHash);
  }

  onClick(event) {
    this.isDisabled = !this.isDisabled;
  }

  onChange(){
    console.log("On Change Called");
  }
}
