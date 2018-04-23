import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Guard} from '../../interfaces/guard';
import {Zone} from 'app/interfaces/zone';

@Component({
    selector: 'app-zone',
    templateUrl: './zone.component.html',
    styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

    @Input() zone: Zone = {
        zonaNombre: null,
        zonaClientes: {}
    };

    objectKeys = Object.keys;

    constructor(private _activeModal: BsModalRef) {
    }

    ngOnInit() {
        console.log(this.zone);
    }

    closeModal() {
        this._activeModal.hide();
    }
}
