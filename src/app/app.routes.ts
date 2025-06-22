import { Routes } from '@angular/router';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { About } from './about/about';
import { authGuard } from './guards/auth-guard';
import { NotFound } from './not-found/not-found';
import { Notificantion } from './notificantion/notificantion';

export const routes: Routes = [
  { path: 'app', component: App, canActivate: [authGuard] }, // Login
  { path: '', component: Login },
  { path: 'about', component: About, canActivate: [authGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'notificantion', component: Notificantion, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }, // fallback route
  { path: '**', component: NotFound },
];
