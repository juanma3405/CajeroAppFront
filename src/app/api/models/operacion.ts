/* tslint:disable */
/* eslint-disable */
import { Tarjeta } from '../models/tarjeta';
export interface Operacion {
  cantidadRetirada?: number;
  fechaHora?: string;
  id?: number;
  idTarjeta?: number;
  tarjeta?: Tarjeta;
}
