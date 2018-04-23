import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {GuardsComponent} from '../pages/guards/guards.component';
import {UsersComponent} from '../pages/users/users.component';
import {ZonesComponent} from '../pages/zones/zones.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
            {path: 'usuarios', component: UsersComponent},
            {path: 'guardias', component: GuardsComponent},
            {path: 'zonas', component: ZonesComponent},
        ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
