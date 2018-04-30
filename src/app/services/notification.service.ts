import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Notification} from '../intarfaces/notification';

@Injectable()
export class NotificationService {

    constructor(private db: AngularFireDatabase) {
    }

    getNotifications() {
        return this.db.list('Argus/NotificacionTmp').valueChanges();
    }

}
