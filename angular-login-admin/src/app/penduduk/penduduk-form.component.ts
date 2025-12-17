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
    <h3>{{ isEdit ? 'Edit' : 'Input' }} Data Penduduk</h3>
    <form (ngSubmit)="save()">
      <div class="mb-3">
        <label class="form-label">NIK</label>
        <input class="form-control" [(ngModel)]="model.nik" name="nik" [readonly]="isEdit" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Nama</label>
        <input class="form-control" [(ngModel)]="model.nama" name="nama" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Alamat</label>
        <input class="form-control" [(ngModel)]="model.alamat" name="alamat" />
      </div>
      <div class="mb-3">
        <label class="form-label">Tgl Lahir</label>
        <input type="date" class="form-control" [(ngModel)]="model.tgl_lahir" name="tgl_lahir" />
      </div>
      <div class="mb-3">
        <label class="form-label">Status</label>
        <input class="form-control" [(ngModel)]="model.status" name="status" />
      </div>
      <div class="mb-3">
        <label class="form-label">Pekerjaan</label>
        <input class="form-control" [(ngModel)]="model.pekerjaan" name="pekerjaan" />
      </div>
      <div class="mb-3">
        <label class="form-label">Gol Darah</label>
        <input class="form-control" [(ngModel)]="model.gol_darah" name="gol_darah" />
      </div>

      <button class="btn btn-primary" type="submit">Simpan</button>
      <a class="btn btn-secondary ms-2" (click)="cancel()">Batal</a>
    </form>
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
