import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientsFromServer: Client[];
  clients: Client[];

  constructor(
    private clientService: ClientService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getClients();
  }
  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

}
