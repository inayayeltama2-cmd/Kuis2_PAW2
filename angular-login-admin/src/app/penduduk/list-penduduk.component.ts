import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Penduduk, PendudukService } from '../services';

@Component({
  selector: 'app-penduduk-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3>Data Penduduk</h3>
      <a class="btn btn-success" [routerLink]="['/penduduk/add']">Input Data</a>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>NIK</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Tgl Lahir</th>
          <th>Status</th>
          <th>Pekerjaan</th>
          <th>Gol Darah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of items">
          <td>{{ p.nik }}</td>
          <td>{{ p.nama }}</td>
          <td>{{ p.alamat }}</td>
          <td>{{ p.tgl_lahir }}</td>
          <td>{{ p.status }}</td>
          <td>{{ p.pekerjaan }}</td>
          <td>{{ p.gol_darah }}</td>
          <td>
            <a class="btn btn-sm btn-primary me-2" [routerLink]="['/penduduk/edit', p.nik]">Edit</a>
            <button class="btn btn-sm btn-danger" (click)="remove(p.nik)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
})
export class ListPendudukComponent {
  items: Penduduk[] = [];

  constructor(private srv: PendudukService, private router: Router) {
    this.load();
  }

  load() {
    this.items = this.srv.list();
  }

  remove(nik: string) {
    if (!confirm('Hapus data ini?')) return;
    this.srv.delete(nik);
    this.load();
  }
}
