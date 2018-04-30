import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/services/shared.service';
import {NotificationService} from '../../services/notification.service';
import {Notification} from '../../intarfaces/notification';
import {DataRouteService} from '../../services/data-route.service';

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
    title: string = '';

    setTheme() {
        this.sharedService.setTheme(this.maThemeModel);
    }

    constructor(private sharedService: SharedService,
                private _notificationService: NotificationService,
                private _dataRouteService: DataRouteService) {
        sharedService.maThemeSubject.subscribe((value) => {
            this.maThemeModel = value;
        });

        this._dataRouteService.getDataRoute()
            .subscribe(data => {
                this.title = data.title;
            });
    }

    ngOnInit() {
        this._notificationService.getNotifications()
            .subscribe((response: Notification[]) => {
                this.notifications = response;
            });
    }
}
