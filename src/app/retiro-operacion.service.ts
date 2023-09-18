import { Injectable } from '@angular/core';
import {Operacion} from './api/models';

@Injectable({
  providedIn: 'root',
})
export class RetiroOperacionService {
   private operacion: Operacion = {};

  setOperacion (operacion: Operacion) {
    this.operacion = operacion;
  }

  getOperacion() {
    return this.operacion;
  }
}