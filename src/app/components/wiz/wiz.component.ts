import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from '../../services/data/formData.service';

@Component({
  selector: 'wiz',
  templateUrl: './wiz.component.html'
})
export class WizComponent implements OnInit {
  title = '.';
  @Input() formData;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + ' loaded!');
  }
}
