import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientService } from './client.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { Config } from './config';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClientService, MessageService, DataService, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
