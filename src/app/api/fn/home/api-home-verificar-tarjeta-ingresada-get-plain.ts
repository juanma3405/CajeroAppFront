/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarjeta } from '../../models/tarjeta';

export interface ApiHomeVerificarTarjetaIngresadaGet$Plain$Params {
  numeroTarjeta?: string;
}

export function apiHomeVerificarTarjetaIngresadaGet$Plain(http: HttpClient, rootUrl: string, params?: ApiHomeVerificarTarjetaIngresadaGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
  const rb = new RequestBuilder(rootUrl, apiHomeVerificarTarjetaIngresadaGet$Plain.PATH, 'get');
  if (params) {
    rb.query('numeroTarjeta', params.numeroTarjeta, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tarjeta>;
    })
  );
}

apiHomeVerificarTarjetaIngresadaGet$Plain.PATH = '/api/home/verificarTarjetaIngresada';
