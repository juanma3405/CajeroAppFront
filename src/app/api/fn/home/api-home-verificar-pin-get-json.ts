/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarjeta } from '../../models/tarjeta';

export interface ApiHomeVerificarPinGet$Json$Params {
  numeroTarjeta?: string;
  pin?: number;
}

export function apiHomeVerificarPinGet$Json(http: HttpClient, rootUrl: string, params?: ApiHomeVerificarPinGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
  const rb = new RequestBuilder(rootUrl, apiHomeVerificarPinGet$Json.PATH, 'get');
  if (params) {
    rb.query('numeroTarjeta', params.numeroTarjeta, {});
    rb.query('pin', params.pin, {});
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

apiHomeVerificarPinGet$Json.PATH = '/api/home/verificarPin';
