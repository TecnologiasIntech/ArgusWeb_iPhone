import {Component, OnInit} from '@angular/core';
import {GuardComponent} from '../../modals/guard/guard.component';
import {GuardService} from '../../services/guard.service';
import {Guard} from '../../interfaces/guard';
import {BsDatepickerConfig, BsModalService} from 'ngx-bootstrap';
import {Globals} from '../../statics/globals';
import {Assistance} from '../../interfaces/assistance';
import {AssistanceService} from '../../services/assistance.service';
import * as _ from 'lodash';
import {SignComponent} from '../../modals/sign/sign.component';

@Component({
    selector: 'app-assistance',
    templateUrl: './assistance.component.html',
    styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {

    assistance: Assistance[];
    assistanceSearched: Assistance[];
    assistanceFoundSearch: boolean = true;
    existAssistance: boolean = false;
    isLoading: boolean = false;
    bsConfig: Partial<BsDatepickerConfig> = Object.assign({}, {containerClass: 'theme-dark-blue'});

    constructor(private _assistanceService: AssistanceService,
                private _modalService: BsModalService) {
    }

    ngOnInit() {
        this.isLoading = false;
        this._assistanceService.getAssistancesList().then((response: Assistance[]) => {
            this.isLoading = false;
            this.assistance = this.assistanceSearched = response;
            this.existAssistance = this.assistance.length > 0;
        });
    }

    guardSearch(search: string) {
        this.assistanceSearched = this.assistance.filter((it: Assistance) => it.guardiaNombre.toLowerCase().indexOf(search.toLowerCase()) >= 0);
        this.assistanceFoundSearch = this.assistanceSearched.length > 0;
    }

    showGuard(index: Assistance) {
        let modalRef = this._modalService.show(SignComponent, Object.assign({}, Globals.optionModalLg, {class: 'gray modal-lg'}));
        modalRef.content.firmaAsistio = index.firmaAsistio;
        modalRef.content.firmaCubreDescanso = index.firmaCubreDescanso;
        modalRef.content.firmaDobleTurno = index.firmaDobleTurno;
        modalRef.content.firmaHorasExtras = index.firmaHorasExtras;

        modalRef.content.capturaAsistio = index.capturaAsistio;
        modalRef.content.capturaCubreDescanso = index.capturaCubreDescanso;
        modalRef.content.capturaDobleTurno = index.capturaDobleTurno;
        modalRef.content.capturaHorasExtras = index.capturaHorasExtras;
        modalRef.content.guard = index.guardiaNombre;
        debugger
    }

}
