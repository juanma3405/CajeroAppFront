/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarjeta } from '../../models/tarjeta';

export interface ApiHomeVerificarTarjetaIngresadaGet$Json$Params {
  numeroTarjeta?: string;
}

export function apiHomeVerificarTarjetaIngresadaGet$Json(http: HttpClient, rootUrl: string, params?: ApiHomeVerificarTarjetaIngresadaGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
  const rb = new RequestBuilder(rootUrl, apiHomeVerificarTarjetaIngresadaGet$Json.PATH, 'get');
  if (params) {
    rb.query('numeroTarjeta', params.numeroTarjeta, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tarjeta>;
    })
  );
}

apiHomeVerificarTarjetaIngresadaGet$Json.PATH = '/api/home/verificarTarjetaIngresada';
