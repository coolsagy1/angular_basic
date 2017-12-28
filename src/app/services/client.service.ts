import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../config/client';
import { Link } from '../config/link';
import { CLIENTS } from '../config/mock-clients';
import { LINKS } from '../config/mock-clients';
import { MessageService } from './message.service';
import { DataService } from './data.service';

@Injectable()
export class ClientService {
clients:Client[] = [];
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private dataService: DataService
  ) { }

  getClientsServer(): Observable<Client[]> {
    return of(CLIENTS);
  }
  getClients(): Observable<Client[]> {
    this.messageService.clear();
    this.messageService.add('ClientService: Fetched all Clients');
    this.dataService.getAll<Client[]>().subscribe(data => {this.clients = data;});
    return this.dataService.getAll<Client[]>();
  }

  getLinks(): Observable<Link[]> {
    return of(LINKS);
  }

getClient(serviceUuid: string): Observable<Client> {
    this.messageService.clear();
    this.messageService.add(`ClientService: Fetched Client with ID:${serviceUuid}`);
    //this.dataService.getAll<Client[]>().subscribe(data => {this.clients = data; console.log(data);});
    //console.log(this.clients);
    //return of(this.clients.find(client => client.serviceUuid === serviceUuid));
    return this.dataService.getOne(serviceUuid);
  }

  private log(message: string) {
    this.messageService.add('ClientService: ' + message);
  }
}
