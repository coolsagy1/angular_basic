import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Clientinfo } from '../../services/data/formData.model';
import { FormDataService } from '../../services/data/formData.service';

@Component({
  selector: 'mt-wizard-clientinfo',
  templateUrl: './clientinfo.component.html'
})

export class ClientinfoComponent implements OnInit {
  title = 'Enter Client Information';
  clientinfo: Clientinfo;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.clientinfo = this.formDataService.getClientinfo();
    console.log('Clientinfo feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setClientinfo(this.clientinfo);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['clientOnboard/siteinfo']);
    }
  }
}
