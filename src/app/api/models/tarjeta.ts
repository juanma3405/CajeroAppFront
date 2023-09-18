/* tslint:disable */
/* eslint-disable */
import { Operacion } from '../models/operacion';
export interface Tarjeta {
  balance?: number;
  bloqueada?: boolean;
  fechaVencimiento?: string;
  id?: number;
  ingresoPinErroneo?: number;
  numeroTarjeta?: null | string;
  operaciones?: null | Array<Operacion>;
  pin?: number;
}
