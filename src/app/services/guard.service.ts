import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class GuardService {

    constructor(private db: AngularFireDatabase) {
    }

    getGuards() {
        return new Promise(resolve => {

            this.db.list('Argus/guardias').valueChanges()
                .subscribe(response => {
                    resolve(response);
                });

        });
    }
}
