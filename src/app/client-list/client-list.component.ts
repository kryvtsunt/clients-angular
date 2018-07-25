import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service.client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients;
  title: string;
  constructor(private service: ClientService) { }

  getAllClients() {
    this.service.getAllClients()
      .then(result => {
        this.clients = result;
      });
  }
  search(){
  }

  ngOnInit() {
    this.getAllClients();
  }

}
