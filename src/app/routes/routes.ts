import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroComponent } from '../hero/hero.component';
import { HeroesResolver } from '../heroes/heroes.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, resolve: { data: HeroesResolver },
    children: [
      { path: 'hero/:id', component: HeroComponent}
    ]}
];

