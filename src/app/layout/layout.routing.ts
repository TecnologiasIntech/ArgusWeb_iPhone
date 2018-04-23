import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {GuardsComponent} from '../pages/guards/guards.component';
import {UsersComponent} from '../pages/users/users.component';

const LAYOUT_ROUTES: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
        { path: 'guardias', component: GuardsComponent },
        { path: 'usuarios', component: UsersComponent },
    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
