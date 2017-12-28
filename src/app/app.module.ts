import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Services */
import { AppComponent } from './app.component';
import { ClientService } from './services/client.service';
import { MessageService } from './services/message.service';
import { DataService } from './services/data.service';
import { FormDataService } from './services/data/formData.service';
import { WorkflowService } from './services/workflow/workflow.service';

/* Configuration */
import { Config } from './config/config';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Basic Components */
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

/* Client Creation Components */
import { WizComponent } from './components/wiz/wiz.component';
import { ClientinfoComponent } from './components/clientinfo/clientinfo.component';
import { SiteinfoComponent } from './components/siteinfo/siteinfo.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { CustomiseComponent } from './components/customise/customise.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientDetailComponent,
    PageNotFoundComponent,
    MessagesComponent,
    DashboardComponent,
    NavbarComponent,
    ClientinfoComponent,
    SiteinfoComponent,
    AgreementComponent,
    CustomiseComponent,
    ResultComponent,
    WizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClientService, MessageService, DataService, Config, FormDataService, WorkflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
