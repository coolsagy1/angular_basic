import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customise } from '../../services/data/formData.model';
import { FormDataService } from '../../services/data/formData.service';

@Component({
  selector: 'mt-wizard-customise'
  , templateUrl: './customise.component.html'
})

export class CustomiseComponent implements OnInit {
  title = 'Where do you live?';
  customise: Customise;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.customise = this.formDataService.getCustomise();
    console.log('customise feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setCustomise(this.customise);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the agreement page
      this.router.navigate(['clientOnboard/agreement']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the result page
      this.router.navigate(['clientOnboard/result']);
    }
  }
}
