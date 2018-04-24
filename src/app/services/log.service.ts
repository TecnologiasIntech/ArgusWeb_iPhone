import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Log} from '../interfaces/log';
import {DateService} from './date.service';
import * as _ from 'lodash';

@Injectable()
export class LogService {

    constructor(private db: AngularFireDatabase) {
    }

    getLogs(): Promise<Log[]> {

        return new Promise(resolve => {
            // this.db.list('Argus/BitacoraRegistro/' + DateService.getCurrentDate()).valueChanges()
            this.db.list('Argus/BitacoraRegistro/20171107').valueChanges()
                .subscribe((logs: any[]) => {
                    logs = _.filter(logs, 'supervisor');
                    resolve(logs);
                });
        });

    }

}
