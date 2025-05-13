import { Routes } from '@angular/router';
import { AddHeroComponent } from '@components/add-hero/add-hero.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { HeroDetailComponent } from '@components/hero-detail/hero-detail.component';
import { HeroesComponent } from '@components/heroes/heroes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'add-heroes', component: AddHeroComponent },
  { path: '**', redirectTo: 'dashboard' },
];
