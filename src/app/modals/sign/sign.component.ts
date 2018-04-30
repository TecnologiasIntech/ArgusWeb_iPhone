import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Guard} from '../../interfaces/guard';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

    @Input() firmaAsistio: string = null;
    @Input() firmaCubreDescanso: string = null;
    @Input() firmaDobleTurno: string = null;
    @Input() firmaHorasExtras: string = null;
    @Input() capturaAsistio: string = null;
    @Input() capturaCubreDescanso: string = null;
    @Input() capturaDobleTurno: string = null;
    @Input() capturaHorasExtras: string = null;
    @Input() guard: string = null;

    constructor(private _activeModal: BsModalRef) {
    }

    ngOnInit() {

    }

    closeModal() {
        this._activeModal.hide();
    }

}
