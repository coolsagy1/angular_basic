import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FormData, Siteinfo } from '../../services/data/formData.model';
import { FormDataService } from '../../services/data/formData.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'mt-wizard-result'
  , templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
  title = 'Thanks for staying tuned!';
  @Input() formData: FormData;
  isFormValid: boolean = false;
  sites: Siteinfo[];

  constructor(private router: Router, private formDataService: FormDataService, private dataService: DataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.sites = this.formData.siteinfo;
    console.log(this.sites.length);
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Result feature loaded!');
  }

  submit() {
    alert('New Client, '+ this.formData.name +' Creation Request Submited!');
    console.log('Response:'+this.dataService.add(this.formData));
    console.log(this.formData);
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

  goToPrevious() {
    this.router.navigate(['clientOnboard/customise']);
  }
}
