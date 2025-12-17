import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Penduduk, PendudukService } from '../services';

@Component({
  selector: 'app-penduduk-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h3 class="mb-0">{{ isEdit ? 'Edit' : 'Input' }} Data Penduduk</h3>
      </div>
      <div class="card-body">
        <form (ngSubmit)="save()">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <label class="form-label">NIK</label>
              <input class="form-control" [(ngModel)]="model.nik" name="nik" [readonly]="isEdit" required />
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label">Nama</label>
              <input class="form-control" [(ngModel)]="model.nama" name="nama" required />
            </div>

            <div class="col-12">
              <label class="form-label">Alamat</label>
              <input class="form-control" [(ngModel)]="model.alamat" name="alamat" />
            </div>

            <div class="col-12 col-md-4">
              <label class="form-label">Tgl Lahir</label>
              <input type="date" class="form-control" [(ngModel)]="model.tgl_lahir" name="tgl_lahir" />
            </div>
            <div class="col-6 col-md-4">
              <label class="form-label">Status</label>
              <input class="form-control" [(ngModel)]="model.status" name="status" />
            </div>
            <div class="col-6 col-md-4">
              <label class="form-label">Gol Darah</label>
              <input class="form-control" [(ngModel)]="model.gol_darah" name="gol_darah" />
            </div>

            <div class="col-12 col-md-6">
              <label class="form-label">Pekerjaan</label>
              <input class="form-control" [(ngModel)]="model.pekerjaan" name="pekerjaan" />
            </div>

            <div class="col-12 d-flex gap-2 mt-3">
              <button class="btn btn-primary" type="submit">Simpan</button>
              <button type="button" class="btn btn-outline-secondary" (click)="cancel()">Batal</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,
})
export class PendudukFormComponent {
  model: Penduduk = {
    nik: '',
    nama: '',
    alamat: '',
    tgl_lahir: '',
    status: '',
    pekerjaan: '',
    gol_darah: '',
  };
  isEdit = false;

  constructor(
    private srv: PendudukService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const nik = this.route.snapshot.paramMap.get('nik');
    if (nik) {
      const found = this.srv.getByNik(nik);
      if (found) this.model = { ...found };
      this.isEdit = true;
    }
  }

  save() {
    if (this.isEdit) {
      this.srv.update(this.model.nik, this.model);
    } else {
      this.srv.create(this.model);
    }
    this.router.navigate(['/penduduk']);
  }

  cancel() {
    this.router.navigate(['/penduduk']);
  }
}
