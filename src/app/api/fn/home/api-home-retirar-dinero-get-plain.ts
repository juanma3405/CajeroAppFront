/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Operacion } from '../../models/operacion';

export interface ApiHomeRetirarDineroGet$Plain$Params {
  numeroTarjeta?: string;
  cantidad?: number;
}

export function apiHomeRetirarDineroGet$Plain(http: HttpClient, rootUrl: string, params?: ApiHomeRetirarDineroGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Operacion>> {
  const rb = new RequestBuilder(rootUrl, apiHomeRetirarDineroGet$Plain.PATH, 'get');
  if (params) {
    rb.query('numeroTarjeta', params.numeroTarjeta, {});
    rb.query('cantidad', params.cantidad, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Operacion>;
    })
  );
}

apiHomeRetirarDineroGet$Plain.PATH = '/api/home/retirarDinero';
