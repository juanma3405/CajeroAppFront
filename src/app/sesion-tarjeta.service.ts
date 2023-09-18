import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SesionTarjetaService {
  private numeroTarjeta: string = '';

  setNumeroTarjeta(numero: string) {
    this.numeroTarjeta = numero;
  }

  getNumeroTarjeta() {
    return this.numeroTarjeta;
  }
}