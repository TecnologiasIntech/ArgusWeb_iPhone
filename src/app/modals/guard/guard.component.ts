import {Component, Input, OnInit} from '@angular/core';
import {Guard} from '../../interfaces/guard';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
    selector: 'app-guard',
    templateUrl: './guard.component.html',
    styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {

    @Input() guard: Guard = {
        diaDescanso: null,
        tipoPago: null,
        usuarioClienteAsignado: null,
        usuarioDisponible: null,
        usuarioDomicilio: null,
        usuarioKey: null,
        usuarioNombre: null,
        usuarioSueldoBase: null,
        usuarioTelefono: null,
        usuarioTelefonoCelular: null,
        usuarioTipo: null,
        usuarioTurno: null
    };

    constructor(private _activeModal: BsModalRef) {
    }

    ngOnInit() {
        console.log(this.guard);
    }

    closeModal(){
        this._activeModal.hide();
    }

}
