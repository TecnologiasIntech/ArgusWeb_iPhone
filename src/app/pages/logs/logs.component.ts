import { Component, OnInit } from '@angular/core';
import {GuardComponent} from '../../modals/guard/guard.component';
import {GuardService} from '../../services/guard.service';
import {Guard} from '../../interfaces/guard';
import {BsModalService} from 'ngx-bootstrap';
import {Globals} from '../../statics/globals';
import {Log} from '../../interfaces/log';
import {LogService} from '../../services/log.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

    objectKeys = Object.keys;
    logs: Log[];
    logsSearched: Log[];
    supervisorFoundSearch: boolean = true;
    existLogs: boolean = false;
    isLoading:boolean = false;

    constructor(private _logService: LogService,
                private _modalService: BsModalService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this._logService.getLogs().then((response: Log[]) => {
            this.isLoading = false;
            this.logs = this.logsSearched = response;

            this.existLogs = this.logs.length > 0;
        });
    }

    guardSearch(search: string) {
        this.logsSearched = this.logs.filter((it: Log) => it.supervisor.toLowerCase().indexOf(search.toLowerCase()) >= 0);
        this.supervisorFoundSearch = this.logsSearched.length > 0;
    }

    showGuard(index: string) {
        let modalRef = this._modalService.show(GuardComponent, Object.assign({}, Globals.optionModalLg, {class: 'gray modal-lg'}));
        modalRef.content.guard = _.filter(this.logs, ['usuarioKey', index])[0];
    }

}
