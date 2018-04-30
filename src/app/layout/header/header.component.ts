import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {NotificationService} from '../../services/notification.service';
import {Notification} from '../../intarfaces/notification';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
})
export class HeaderComponent implements OnInit {

    maThemeModel: string = 'green';
    notifications: Notification[] = [];

    setTheme() {
        this.sharedService.setTheme(this.maThemeModel);
    }

    constructor(private sharedService: SharedService,
                private _notificationService: NotificationService) {
        sharedService.maThemeSubject.subscribe((value) => {
            this.maThemeModel = value;
        });
    }

    ngOnInit() {
        this._notificationService.getNotifications()
            .subscribe((response: Notification[]) => {
                this.notifications = response;
            });
    }
}
