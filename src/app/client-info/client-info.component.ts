import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../services/client.service.client';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  client;
  clientId: string;

  constructor(private service: ClientService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => { this.setParams(params); });
  }

  setParams(params) {
    this.clientId = params['clientId'];
    if (this.clientId !== undefined) {
      this.getClientById(this.clientId);
    }
  }
  getClientById(id: string) {
    this.service.getClientById(id)
      .then(res => {this.client = res[0]; console.log(this.client); });
  }

  ngOnInit() {

  }

}
