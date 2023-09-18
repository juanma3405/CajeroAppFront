/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarjeta } from '../../models/tarjeta';

export interface ApiHomeConsultarBalanceGet$Json$Params {
  numeroTarjeta?: string;
}

export function apiHomeConsultarBalanceGet$Json(http: HttpClient, rootUrl: string, params?: ApiHomeConsultarBalanceGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarjeta>> {
  const rb = new RequestBuilder(rootUrl, apiHomeConsultarBalanceGet$Json.PATH, 'get');
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

apiHomeConsultarBalanceGet$Json.PATH = '/api/home/consultarBalance';
