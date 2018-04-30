import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {GuardsComponent} from '../pages/guards/guards.component';
import {UsersComponent} from '../pages/users/users.component';
import {ZonesComponent} from '../pages/zones/zones.component';
import {ClientsZoneComponent} from '../pages/clients-zone/clients-zone.component';
import {LogsComponent} from '../pages/logs/logs.component';
import {AssistanceComponent} from '../pages/assistance/assistance.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
            {path: 'usuarios', component: UsersComponent, data: { title: 'Usuarios' } },
            {path: 'guardias', component: GuardsComponent, data: { title: 'Guardias' } },
            {path: 'zonas', component: ZonesComponent, data: { title: 'Zonas' } },
            {path: 'servicios', component: ClientsZoneComponent, data: { title: 'Servicios' } },
            {path: 'bitacora', component: LogsComponent, data: { title: 'Bitacoras' } },
            {path: 'asistencia', component: AssistanceComponent, data: { title: 'Lista de asistencia' } },
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
