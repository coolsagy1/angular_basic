import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Siteinfo } from '../../services/data/formData.model'
import { FormDataService } from '../../services/data/formData.service';
import { FormGroup, FormControl , FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'mt-wizard-siteinfo',
  templateUrl: './siteinfo.component.html'
})

export class SiteinfoComponent implements OnInit {
  title = 'Enter Site Information';
  siteinfo: Siteinfo[];
  form: any;

  constructor(private router: Router, private formDataService: FormDataService, private formBuilder: FormBuilder) {
  }


  save(form: any): boolean {
    console.log('saving siteinfo:'+form);
    if (!form.valid) {
      return false;
    }
    this.formDataService.setSiteinfo(this.siteinfo);
    return true;
  }

  goToPrevious(form: any) {
    //if (this.save(form)) {
      this.router.navigate(['clientOnboard/clientinfo']);
    //}
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['clientOnboard/agreement']);
    }
  }

  addNewSite() {
    console.log('siteinfo:' + this.siteinfo.length);
    this.siteinfo.push(new Siteinfo(''));
    console.log('siteinfo:' + this.siteinfo.length);
  }

  ngOnInit() {
    this.siteinfo = this.formDataService.getSiteinfo();
    console.log('Siteinfo feature loaded!'+this.siteinfo.length+"!");

    this.addForm = this.formBuilder.group({
      description: ['', Validators.required],
      siteArray: this.formBuilder.array([
          this.initSite(),
      ])
  });

  this.myForm = new FormGroup({
    name:new FormControl(),
    locale: new FormControl(),
    configurations: this.formBuilder.array([
      this.newGroup()]
    )
  });
}


  addForm: FormGroup; // form group instance

  initSite() {
      return this.formBuilder.group({
          SiteAddress: ['', Validators.required],
          SiteName: ['', Validators.required]
      });
  }
  addSite() {
      const control = < FormArray > this.addForm.controls['siteArray'];
      control.push(this.initSite());
  }
  removeSite(i: number) {
      const control = < FormArray > this.addForm.controls['siteArray'];
      control.removeAt(i);
  }

  savea(form: any){
    console.log(form.controls.description);
    console.log('Add Name:' + this.addForm.get('description').value);
    console.log('My Name:' + this.myForm.get('name').value);
  }


  myForm: FormGroup;
  addConfig() {
    const control = < FormArray > this.myForm.controls['configurations'];
    console.log(control);
    control.push(this.newGroup());
    console.log(control);
}
newGroup(){
  return new FormGroup({ 
    ConfigKeys: new FormControl(), 
    ConfigValue: new FormControl(),
    });
}

}
