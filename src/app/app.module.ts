import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {SharedService} from './shared/services/shared.service';
import {routing} from './app.routing';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import {CountdownTimerModule} from 'ngx-countdown-timer';
import { ToastrModule } from 'ngx-toastr';
import { GuardsComponent } from './pages/guards/guards.component';
import { GuardComponent } from './modals/guard/guard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './modals/user/user.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ZonesComponent } from './pages/zones/zones.component';
import { ZoneComponent } from './modals/zone/zone.component';
import { ClientsZoneComponent } from './pages/clients-zone/clients-zone.component';
import { ClientZoneComponent } from './modals/client-zone/client-zone.component';
import { LogsComponent } from './pages/logs/logs.component';
import { LogComponent } from './modals/log/log.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { SignComponent } from './modals/sign/sign.component';
import { LoginComponent } from './pages/login/login.component';
import {SharedModule} from './shared/shared.module';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AlertService} from './services/alert.service';

defineLocale('es', esLocale);

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        routing,
        CountdownTimerModule.forRoot(),
        ToastrModule.forRoot(),
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        SharedService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        AlertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
