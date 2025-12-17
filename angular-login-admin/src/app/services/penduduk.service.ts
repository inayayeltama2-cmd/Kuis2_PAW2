import { Injectable } from '@angular/core';

export interface Penduduk {
  nik: string;
  nama: string;
  alamat: string;
  tgl_lahir: string;
  status: string;
  pekerjaan: string;
  gol_darah: string;
}

@Injectable({
  providedIn: 'root'
})
export class PendudukService {
  private pendudukList: Penduduk[] = [];

  constructor() {
    // Data dummy
    this.pendudukList = [
      {
        nik: '1234567890123456',
        nama: 'John Doe',
        alamat: 'Jl. Merdeka No. 123',
        tgl_lahir: '1990-01-15',
        status: 'Kawin',
        pekerjaan: 'Programmer',
        gol_darah: 'A'
      }
    ];
  }

  list(): Penduduk[] {
    return this.pendudukList;
  }

  getByNik(nik: string): Penduduk | undefined {
    return this.pendudukList.find(p => p.nik === nik);
  }

  create(penduduk: Penduduk): void {
    this.pendudukList.push(penduduk);
  }

  update(nik: string, penduduk: Penduduk): void {
    const index = this.pendudukList.findIndex(p => p.nik === nik);
    if (index !== -1) {
      this.pendudukList[index] = penduduk;
    }
  }

  delete(nik: string): void {
    this.pendudukList = this.pendudukList.filter(p => p.nik !== nik);
  }
}
