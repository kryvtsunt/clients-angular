import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service.client';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients;
  clientId: string;
  title: string;

  constructor(private service: ClientService, private route: ActivatedRoute) {
  this.route.params.subscribe(
    params => {this.clientId = params['clientId']; });
}
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
