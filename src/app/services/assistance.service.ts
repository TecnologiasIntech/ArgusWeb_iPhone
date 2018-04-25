import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {DateService} from './date.service';
import {Assistance} from '../interfaces/assistance';
import * as _ from 'lodash';

@Injectable()
export class AssistanceService {

    constructor(private db: AngularFireDatabase) {
    }

    getAssistancesList(): Promise<Assistance[]> {
        return new Promise(resolve => {
            // this.db.list('Argus/Bitacora/' + DateService.getCurrentDate()).valueChanges()
            this.db.list('Argus/Bitacora/20180304').valueChanges()
                .subscribe((response: Assistance[]) => {
                    response = _.filter(response, 'guardiaNombre')
                    resolve(response);
                });
        });
    }
}
