import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../guards/auth.guard';
import { BlankComponent } from '../layouts/blank/blank.component';
import { FullComponent } from '../layouts/full/full.component';
import { LoginComponent } from '../views/authentication/login/login.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { NotFoundComponent } from '../views/errors/not-found/not-found.component';
import { UnauthorizedComponent } from '../views/errors/unauthorized/unauthorized.component';
import { PATHS } from './paths';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: PATHS.LOGIN },
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: PATHS.LOGIN, component: LoginComponent },
      { path: PATHS.UNAUTHORIZED, component: UnauthorizedComponent },
      { path: PATHS.NOT_FOUND, component: NotFoundComponent }
    ]
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [authGuard],
    children: [
      { path: PATHS.DASHBOARD, component: DashboardComponent }
    ]
  },
  { path: '**', redirectTo: PATHS.NOT_FOUND }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
