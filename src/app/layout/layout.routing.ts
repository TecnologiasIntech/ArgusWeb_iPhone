import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {GuardsComponent} from '../pages/guards/guards.component';
import {UsersComponent} from '../pages/users/users.component';
import {ZonesComponent} from '../pages/zones/zones.component';
import {ClientsZoneComponent} from '../pages/clients-zone/clients-zone.component';
import {LogsComponent} from '../pages/logs/logs.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
            {path: 'usuarios', component: UsersComponent},
            {path: 'guardias', component: GuardsComponent},
            {path: 'zonas', component: ZonesComponent},
            {path: 'servicios', component: ClientsZoneComponent},
            {path: 'bitacora', component: LogsComponent},
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
