import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Agreement } from '../../services/data/formData.model';
import { FormDataService } from '../../services/data/formData.service';

@Component({
  selector: 'mt-wizard-agreement'
  , templateUrl: './agreement.component.html'
})

export class AgreementComponent implements OnInit {
  title = 'Enter Client\'s Agreement Details';
  agreement: Agreement;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.agreement = this.formDataService.getAgreement();
    console.log('Agreement feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    console.log('This:' + this.agreement);
    console.log('data:' + form);
    this.formDataService.setAgreement(this.agreement);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the siteinfo page
      this.router.navigate(['clientOnboard/siteinfo']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the result page
      this.router.navigate(['clientOnboard/customise']);
    }
  }
}
