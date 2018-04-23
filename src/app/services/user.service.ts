import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class UserService {

    constructor(private db: AngularFireDatabase) {
    }

    getUsers() {
        return new Promise(resolve => {

            this.db.list('Argus/administradores').valueChanges()
                .subscribe(response => {
                    resolve(response);
                });

        });
    }

    getSupervisors() {
        return new Promise(resolve => {
            this.db.list('Argus/supervisores').valueChanges()
                .subscribe(response => {
                    resolve(response);
                });
        });
    }


}
