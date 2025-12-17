import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './pages/dashboard.component';
import { ListPendudukComponent } from './penduduk/list-penduduk.component';
import { PendudukFormComponent } from './penduduk/penduduk-form.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'penduduk', component: ListPendudukComponent, canActivate: [AuthGuard] },
  { path: 'penduduk/add', component: PendudukFormComponent, canActivate: [AuthGuard] },
  { path: 'penduduk/edit/:nik', component: PendudukFormComponent, canActivate: [AuthGuard] },
];
