/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarjeta } from '../../models/tarjeta';

export interface ObtenerTarjeta$Plain$Params {
  numeroTarjeta: string;
}

export function obtenerTarjeta$Plain(http: HttpClient, rootUrl: string, params: ObtenerTarjeta$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
  const rb = new RequestBuilder(rootUrl, obtenerTarjeta$Plain.PATH, 'get');
  if (params) {
    rb.path('numeroTarjeta', params.numeroTarjeta, {});
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

obtenerTarjeta$Plain.PATH = '/api/tarjetas/{numeroTarjeta}';
