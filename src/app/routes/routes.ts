import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { HeroesResolver } from '../heroes/heroes.resolver';
import { RelatedHerosDialogComponent } from '../hero/related.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, resolve: { data: HeroesResolver }},
  { path: 'hero/:id', component: RelatedHerosDialogComponent, outlet: 'popup' }
];

