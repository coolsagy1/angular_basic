export class FormData {
  name: string = '';
  region: string = '';
  countryOfOrigin: string = '';
  description: string = '';
  legacyGroupId: string = '';
  uri: string = '';

  siteinfo: Siteinfo[] = [new Siteinfo('')];

  language: string = '';
  type: string = '';
  agreementname: string = '';
  agreementcontent: string = '';
  operator: string = '';

  template: string = '';
  headerUrl: string = '';
  footerUrl: string = '';
  logoUrl: string = '';

  clear() {
    this.name = '';
    this.region = '';
    this.countryOfOrigin = '';
    this.description = '';
    this.legacyGroupId = '';
    this.uri = '';

    this.siteinfo = [];

    this.language = '';
    this.type = '';
    this.agreementname = '';
    this.agreementcontent = '';
    this.operator = '';

    this.template = '';
    this.headerUrl = '';
    this.footerUrl = '';
    this.logoUrl = '';
  }
}

export class Clientinfo {
  name: string = '';
  region: string = '';
  countryOfOrigin: string = '';
  description: string = '';
  legacyGroupId: string = '';
  uri: string = '';
}

export class Siteinfo {
  constructor(sitename){
this.sitename = sitename;
  }
  sitename: string = '';
  defaultLocale: string = '';
  configurations: string = '';
  credentials: Credentials[] = [];
}

export class Credentials {
  name: string = '';
  scope: string = '';
  grantType: string = '';
  refreshTokenEnabled: boolean = false;
}

export class Agreement {
  language: string = '';
  type: string = '';
  agreementname: string = '';
  agreementcontent: string = '';
  operator: string = '';
}

export class Customise {
  template: string = '';
  headerUrl: string = '';
  footerUrl: string = '';
  logoUrl: string = '';
}
