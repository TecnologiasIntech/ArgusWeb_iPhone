import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {GuardsComponent} from '../pages/guards/guards.component';

const LAYOUT_ROUTES: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'guardias', pathMatch: 'full' },
        { path: 'guardias', component: GuardsComponent },
    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
