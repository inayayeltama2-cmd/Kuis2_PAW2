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
    <div class="card">
      <div class="card-header">
        <div class="list-header">
          <div>
            <h3 class="mb-0">Data Penduduk</h3>
            <div class="small-muted">Kelola data penduduk </div>
          </div>
          <div class="d-flex align-items-center">
            <a class="btn btn-success me-2" [routerLink]="['/penduduk/add']">Masukkan Data</a>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div *ngIf="items.length === 0" class="small-muted">Belum ada data penduduk.</div>

        <div class="table-responsive">
          <table class="table align-middle">
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
              <tr *ngFor="let p of items" class="mb-2">
                <td class="text-muted">{{ p.nik }}</td>
                <td>{{ p.nama }}</td>
                <td>{{ p.alamat }}</td>
                <td>{{ p.tgl_lahir }}</td>
                <td><span class="badge">{{ p.status }}</span></td>
                <td>{{ p.pekerjaan }}</td>
                <td>{{ p.gol_darah }}</td>
                <td>
                  <div class="actions">
                    <a class="btn btn-sm btn-outline-primary" [routerLink]="['/penduduk/edit', p.nik]">Edit</a>
                    <button class="btn btn-sm btn-outline-danger" (click)="remove(p.nik)">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
