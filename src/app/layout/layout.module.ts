import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgModule} from '@angular/core';
import {LayoutRouting} from './layout.routing';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {BsDatepickerModule, ButtonsModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './header/search/search.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NavigationTriggerComponent} from './header/navigation-trigger/navigation-trigger.component';
import {Globals} from '../statics/globals';
import {SharedModule} from '../shared/shared.module';
import {Select2Module} from 'ng2-select2';
import {Broadcaster} from '../../assets/js/broadcaster';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AlertService} from '../services/alert.service';
import {ValidationService} from '../services/validation.service';
import {CountdownTimerModule} from 'ngx-countdown-timer';
import {LimitToPipe} from '../pipes/limit-to.pipe';
import {GrowlComponent} from '../components/growl/growl.component';
import {GuardsComponent} from '../pages/guards/guards.component';
import {GuardService} from '../services/guard.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {GuardComponent} from '../modals/guard/guard.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {UsersComponent} from '../pages/users/users.component';
import {UserService} from '../services/user.service';
import {UserComponent} from '../modals/user/user.component';
import {CapitalizePipe} from '../pipes/capitalize.pipe';
import {ZonesComponent} from '../pages/zones/zones.component';
import {ZoneComponent} from '../modals/zone/zone.component';
import {ZoneService} from '../services/zone.service';
import {ClientZoneComponent} from '../modals/client-zone/client-zone.component';
import {ClientZoneService} from '../services/client-zone.service';
import {ClientsZoneComponent} from '../pages/clients-zone/clients-zone.component';
import {LogComponent} from '../modals/log/log.component';
import {LogsComponent} from '../pages/logs/logs.component';
import {LogService} from '../services/log.service';
import {DateService} from '../services/date.service';
import {AssistanceComponent} from '../pages/assistance/assistance.component';
import {SignComponent} from '../modals/sign/sign.component';
import {AssistanceService} from '../services/assistance.service';
import {NotificationService} from '../services/notification.service';
import {DataRouteService} from '../services/data-route.service';
import {AuthGuard} from '../guards/auth.guard';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SearchComponent,
        NavigationComponent,
        NavigationTriggerComponent,
        LimitToPipe,
        GrowlComponent,
        GuardsComponent,
        GuardComponent,
        NotFoundComponent,
        LoaderComponent,
        UsersComponent,
        UserComponent,
        CapitalizePipe,
        ZonesComponent,
        ZoneComponent,
        ClientsZoneComponent,
        ClientZoneComponent,
        LogsComponent,
        LogComponent,
        AssistanceComponent,
        SignComponent
    ],
    providers: [
        Globals,
        Broadcaster,
        AlertService,
        ValidationService,
        GuardService,
        UserService,
        ZoneService,
        ClientZoneService,
        LogService,
        DateService,
        AssistanceService,
        NotificationService,
        DataRouteService,
        AuthGuard
    ],
    imports: [
        CommonModule,
        LayoutRouting,
        FormsModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        ButtonsModule.forRoot(),
        PerfectScrollbarModule,
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        Select2Module,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        CountdownTimerModule,

    ],
    entryComponents: [
        GuardComponent,
        UserComponent,
        ZoneComponent,
        ClientZoneComponent,
        LogComponent,
        SignComponent
    ]
})

export class LayoutModule {
}
