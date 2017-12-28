import { Component, OnInit } from '@angular/core';
//import { Client } from '../client';
import { Link } from '../../config/link';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //clients: Client[] = [];
  links: Link[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.clientService.getLinks()
      .subscribe(links => this.links = links.slice(0, 6));
  }
}
