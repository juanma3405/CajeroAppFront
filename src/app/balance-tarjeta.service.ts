import { Injectable } from '@angular/core';
import {Tarjeta} from './api/models';

@Injectable({
  providedIn: 'root',
})
export class BalanceTarjetaService {
   private tarjeta : Tarjeta = {};

  setTarjeta(tarjeta: Tarjeta) {
    this.tarjeta = tarjeta;
  }

  getTarjeta() {
    return this.tarjeta;
  }
}