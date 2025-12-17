import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { ListPendudukComponent } from './penduduk/list-penduduk.component';
import { PendudukFormComponent } from './penduduk/penduduk-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'penduduk', component: ListPendudukComponent },
  { path: 'penduduk/add', component: PendudukFormComponent },
  { path: 'penduduk/edit/:nik', component: PendudukFormComponent },
];
