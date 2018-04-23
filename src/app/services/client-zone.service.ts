import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Client} from '../interfaces/client';

@Injectable()
export class ClientZoneService {

    constructor(private db: AngularFireDatabase) {
    }

    getClients(): Promise<Client[]> {
        return new Promise(resolve => {

            this.db.list('Argus/Clientes').valueChanges()
                .subscribe((response: Client[]) => {
                    resolve(response);
                });

        });
    }

}
