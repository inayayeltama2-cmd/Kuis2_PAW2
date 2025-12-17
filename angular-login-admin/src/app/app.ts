import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './layout/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('angular-login-admin');

  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
  }
}

