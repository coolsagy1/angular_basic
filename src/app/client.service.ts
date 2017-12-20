import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from './client';
import { Link } from './link';
import { CLIENTS, LINKS } from './mock-clients';
import { MessageService } from './message.service';
import { DataService } from './data.service';

@Injectable()
export class ClientService {

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
    return this.dataService.getAll<Client[]>();
    // return of(clients);
  }

  getLinks(): Observable<Link[]> {
    return of(LINKS);
  }

  getClient(id: number): Observable<Client> {
    this.messageService.clear();
    this.messageService.add(`ClientService: Fetched Client with ID:${id}`);
    return of(CLIENTS.find(client => client.id === id));
  }

  private log(message: string) {
    this.messageService.add('ClientService: ' + message);
  }

  private clientUrl = 'api/clients';
}
