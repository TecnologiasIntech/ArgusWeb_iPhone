import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Guard} from '../../interfaces/guard';
import {User} from '../../interfaces/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    @Input() user: User = {
        usuarioContrasena: null,
        usuarioDomicilio: null,
        usuarioEmail: '',
        usuarioKey: null,
        usuarioNombre: null,
        usuarioTelefono: null,
        usuarioTelefonoCelular: null,
        usuarioTipo: null,
        usuarioTurno: null,
        usuarioZona: null
    };

    constructor(private _activeModal: BsModalRef) {
    }

    ngOnInit() {
        console.log(this.user);
    }

    closeModal() {
        this._activeModal.hide();
    }

}
