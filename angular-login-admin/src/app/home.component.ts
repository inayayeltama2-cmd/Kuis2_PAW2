import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container mt-4">
    <h2>Selamat datang, Admin</h2>
    <p>Gunakan navigasi untuk mengelola data penduduk.</p>
  </div>
  `,
})
export class HomeComponent {
  constructor(private auth: AuthService, private router: Router) {}
}
