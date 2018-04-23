import {Component, Input, OnInit} from '@angular/core';
import {GuardComponent} from '../guard/guard.component';
import {GuardService} from '../../services/guard.service';
import {Guard} from '../../interfaces/guard';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Globals} from '../../statics/globals';
import {Client} from '../../interfaces/client';
import {ClientZoneService} from '../../services/client-zone.service';
import {Zone} from '../../interfaces/zone';

@Component({
    selector: 'app-client-zone',
    templateUrl: './client-zone.component.html',
    styleUrls: ['./client-zone.component.scss']
})
export class ClientZoneComponent implements OnInit {

    @Input() client: Client = {
        clienteDisponible: null,
        clienteDomicilio: null,
        clienteGuardias: null,
        clienteHorario: null,
        clienteNombre: null,
        clienteNumeroGuardias: null,
        clienteZonaAsignada: null
    };

    objectKeys = Object.keys;

    constructor(private _activeModal: BsModalRef) {
    }

    ngOnInit() {

    }

    closeModal() {
        this._activeModal.hide();
    }

}
