import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Zone} from '../interfaces/zone';

@Injectable()
export class ZoneService {

    constructor(private db: AngularFireDatabase) {
    }

    getZones(): Promise<Zone[]> {
        return new Promise(resolve => {

            this.db.list('Argus/Zonas').valueChanges()
                .subscribe((response: Zone[]) => {
                    resolve(response);
                });
        });
    }

}
