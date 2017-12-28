import { Injectable } from '@angular/core';

import { FormData, Clientinfo, Siteinfo, Agreement, Customise } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isClientinfoFormValid: boolean = false;
  private isSiteInfoFormValid: boolean = false;
  private isAgreementFormValid: boolean = false;
  private isCustomiseFormValid: boolean = false;

  constructor(private workflowService: WorkflowService) {
  }

  getClientinfo(): Clientinfo {
    // Return the Clientinfo data
    var clientinfo: Clientinfo = {
      name: this.formData.name,
      region: this.formData.region,
      countryOfOrigin: this.formData.countryOfOrigin,
      description: this.formData.description,
      legacyGroupId: this.formData.legacyGroupId,
      uri: this.formData.uri
    };
    return clientinfo;
  }

  setClientinfo(data: Clientinfo) {
    // Update the Clientinfo data only when the Clientinfo Form had been validated successfully
    this.isClientinfoFormValid = true;
    this.formData.name = data.name;
    this.formData.region = data.region;
    this.formData.countryOfOrigin = data.countryOfOrigin;
    this.formData.description = data.description;
    this.formData.legacyGroupId = data.legacyGroupId;
    this.formData.uri = data.uri;
    // Validate Clientinfo Step in Workflow
    this.workflowService.validateStep(STEPS.clientinfo);
  }

  getSiteinfo(): Siteinfo[] {
    // Return the siteinfo type
    return this.formData.siteinfo;
  }

setSiteinfo(data: Siteinfo[]) {
    // Update the siteinfo type only when the siteinfo Form had been validated successfully
    this.isSiteInfoFormValid = true;
  console.log('data:'+data);
    this.formData.siteinfo = data;
    console.log('siteinfo length:'+this.formData.siteinfo.length);
    // Validate siteinfo Step in Workflow
    this.workflowService.validateStep(STEPS.siteinfo);
  }

  getAgreement(): Agreement {
    // Return the Agreement data
    var agreement: Agreement = {
      language: this.formData.language,
      type: this.formData.type,
      agreementname: this.formData.agreementname,
      agreementcontent: this.formData.agreementcontent,
      operator: this.formData.operator
    };
    return agreement;
  }

  setAgreement(data: Agreement) {
    // Update the Agreement data only when the Agreement Form had been validated successfully
    this.isAgreementFormValid = true;
    this.formData.language = data.language;
    this.formData.type = data.type;
    this.formData.agreementname = data.agreementname;
    this.formData.agreementcontent = data.agreementcontent;
    this.formData.operator = data.operator;
    this.workflowService.validateStep(STEPS.agreement);
  }

  getCustomise(): Customise {
    // Return the Customise data
    var customise: Customise = {
      template: this.formData.template,
      headerUrl: this.formData.headerUrl,
      footerUrl: this.formData.footerUrl,
      logoUrl: this.formData.logoUrl
    };
    console.log(customise);
    return customise;
  }

  setCustomise(data: Customise) {
    // Update the Customise data only when the Customise Form had been validated successfully
    this.isCustomiseFormValid = true;
    this.formData.template = data.template;
    this.formData.headerUrl = data.headerUrl;
    this.formData.footerUrl = data.footerUrl;
    this.formData.logoUrl = data.logoUrl;
    // Validate Customise Step in Workflow
    this.workflowService.validateStep(STEPS.customise);
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Reset the workflow
    this.workflowService.resetSteps();
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isClientinfoFormValid = this.isSiteInfoFormValid = this.isAgreementFormValid = this.isCustomiseFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isClientinfoFormValid &&
      this.isSiteInfoFormValid &&
      this.isAgreementFormValid &&
      this.isCustomiseFormValid;
  }
}
