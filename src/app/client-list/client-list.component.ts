import {Component, OnInit} from '@angular/core';
import {ClientService} from '../services/client.service.client';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../models/client.model.client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[];
  allClients: Client[];
  clientId: string;
  title: string;

  constructor(private service: ClientService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.clientId = params['clientId'];
      });
  }

  getAllClients() {
    this.service.getAllClients()
      .then(result => {
        this.allClients = result;
        this.clients = result;
      });
  }

  search() {
    console.log(this.title);
    if (this.title !== '') {
      this.service.searchClients(this.title)
        .then(res => {
          this.clients = res
        });
    } else {
      this.clients = this.allClients;
    }
  }

  ngOnInit() {
    this.title = '';
    this.getAllClients();
  }

}
