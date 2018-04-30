import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {GuardsComponent} from '../pages/guards/guards.component';
import {UsersComponent} from '../pages/users/users.component';
import {ZonesComponent} from '../pages/zones/zones.component';
import {ClientsZoneComponent} from '../pages/clients-zone/clients-zone.component';
import {LogsComponent} from '../pages/logs/logs.component';
import {AssistanceComponent} from '../pages/assistance/assistance.component';
import {AuthGuard} from '../guards/auth.guard';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
            {path: 'usuarios', component: UsersComponent, data: { title: 'Usuarios' }, canActivate: [AuthGuard] },
            {path: 'guardias', component: GuardsComponent, data: { title: 'Guardias' }, canActivate: [AuthGuard]  },
            {path: 'zonas', component: ZonesComponent, data: { title: 'Zonas' }, canActivate: [AuthGuard]  },
            {path: 'servicios', component: ClientsZoneComponent, data: { title: 'Servicios' }, canActivate: [AuthGuard]  },
            {path: 'bitacora', component: LogsComponent, data: { title: 'Bitacoras' }, canActivate: [AuthGuard]  },
            {path: 'asistencia', component: AssistanceComponent, data: { title: 'Lista de asistencia' }, canActivate: [AuthGuard]  },
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
