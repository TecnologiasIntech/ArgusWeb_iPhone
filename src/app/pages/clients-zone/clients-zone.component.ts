import { Component, OnInit } from '@angular/core';
import {ClientZoneComponent} from '../../modals/client-zone/client-zone.component';
import {Client} from '../../interfaces/client';
import {ClientZoneService} from '../../services/client-zone.service';
import {BsModalService} from 'ngx-bootstrap';
import {Globals} from '../../statics/globals';
import * as _ from "lodash";

@Component({
  selector: 'app-clients-zone',
  templateUrl: './clients-zone.component.html',
  styleUrls: ['./clients-zone.component.scss']
})
export class ClientsZoneComponent implements OnInit {

    clients: Client[];
    clientsSearched: Client[];
    clientFoundSearch: boolean = true;
    existClients: boolean = false;
    isLoading:boolean = false;

    constructor(private _clientService: ClientZoneService,
                private _modalService: BsModalService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this._clientService.getClients().then((response: Client[]) => {
            this.isLoading = false;
            this.clients = this.clientsSearched = response;
            this.existClients = this.clients.length > 0;
        });
    }

    clientSearch(search: string) {
        // this.clientsSearched = this.clients.filter((it: Client) => it.clienteNombre.toLowerCase().indexOf(search.toLowerCase()) >= 0);
        this.clientsSearched = this.clients.filter((client: Client) => (client.clienteNombre == undefined ? false : client.clienteNombre.toLowerCase().indexOf(search.toLowerCase()) >= 0));
        this.clientFoundSearch = this.clientsSearched.length > 0;
    }

    showClient(index: string) {
        let modalRef = this._modalService.show(ClientZoneComponent, Object.assign({}, Globals.optionModalLg, {class: 'gray modal-lg'}));
        modalRef.content.client = _.filter(this.clients, ['clienteNombre', index])[0];
    }

}
